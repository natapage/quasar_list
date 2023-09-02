<script setup>
import ContainerItem from "../components/ContainerItem.vue";
import NoteCard from "../components/NoteCard.vue";
import { useLocalNotes } from "../composables/useLocalStorage";
import { useRouter } from "vue-router";
const notes = useLocalNotes();
const router = useRouter();
</script>

<template>
  <q-page padding>
    <container-item>
      <div class="row items-center justify-between">
        <h3>Your notes</h3>
        <div>
          <q-btn round color="positive" icon="add" to="/new"></q-btn>
        </div>
      </div>

      <note-card
        v-for="({ title, description }, idx) in notes"
        :key="idx"
        :title="title"
        :description="description"
        @click="router.push(`/note/${idx}`)"
      />
      <div v-if="notes.length === 0">You have not created any notes.</div>
    </container-item>
  </q-page>
</template>
