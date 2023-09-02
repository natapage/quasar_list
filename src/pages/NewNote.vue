<script setup>
import ContainerItem from "../components/ContainerItem.vue";
import { useLocalNotes } from "../composables/useLocalStorage";
import { reactive } from "vue";
import { useRouter } from "vue-router";

const router = useRouter();
const notes = useLocalNotes();

const note = reactive({
  title: "",
  description: "",
  content: "",
});

const submit = () => {
  console.log(notes.value);

  notes.value.unshift({
    ...note,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });
  console.log(notes.value);
  router.push("/");

  note.title = "";
  note.description = "";
  note.content = "";
};
</script>

<template>
  <div>
    <q-page padding>
      <container-item>
        <h3>New Note</h3>
        <form>
          <q-input
            class="q-mt-sm"
            outlined
            v-model="note.title"
            label="Title"
          />

          <q-input
            class="q-mt-sm"
            outlined
            v-model="note.description"
            label="Description"
            dense
          />

          <q-card flat bordered class="q-mt-sm">
            <q-editor v-model="note.content" min-height="5rem" />
          </q-card>

          <div class="q-mt-md">
            <q-btn color="grey" to="/" type="reset">Cancel</q-btn>
            <q-btn class="q-ml-sm" color="positive" @click="submit">
              Create
            </q-btn>
          </div>
        </form>
      </container-item>
    </q-page>
  </div>
</template>
