<script setup>
import ContainerItem from "../components/ContainerItem.vue";
import { useRoute, useRouter } from "vue-router";
import { useLocalNotes } from "../composables/useLocalStorage";
import { ref, computed } from "vue";

const notes = useLocalNotes();
const route = useRoute();
const noteId = computed(() => parseInt(route.params.id));
const note = computed(() => notes.value[noteId.value]);

const router = useRouter();
const remove = () => {
  notes.value.splice(noteId.value, 1);
  router.push("/");
};

const editing = ref(false);
</script>

<template>
  <q-page padding>
    <container-item>
      <div v-if="editing">
        <form @submit.prevent="editing = false">
          <q-input v-model="note.title" label="Title" filled />
          <q-input
            v-model="note.description"
            label="Description"
            filled
            class="q-mt-sm"
            dense
          />

          <q-card flat bordered class="q-mt-sm">
            <q-editor v-model="note.content" min-height="5rem" />
          </q-card>

          <div class="q-mt-md">
            <q-btn class="q-ml-sm" color="positive" type="submit"> Done </q-btn>
          </div>
        </form>
      </div>

      <div v-else>
        <div class="row items-center justify-between">
          <h3 class="q-mb-md q-mt-md">{{ note?.title }}</h3>
          <div>
            <q-btn
              round
              color="secondary"
              icon="edit"
              @click="editing = true"
            />
            <q-btn
              class="q-ml-sm"
              round
              color="red"
              icon="delete"
              @click="remove"
            />
          </div>
        </div>
        <div>{{ note?.description }}</div>
        <div class="q-mt-md" v-html="note?.content" />
      </div>
    </container-item>
  </q-page>
</template>
