<script setup>
import Container from "src/components/ContainerItem.vue";
import NoteCard from "src/components/NoteCard.vue";
import { useLocalNotes } from "src/helper";
import { useRouter } from "vue-router";
const notes = useLocalNotes();
const router = useRouter();
</script>

<template>
  <q-page padding>
    <Container>
      <div class="row items-center justify-between">
        <h3>Your notes</h3>
        <div>
          <q-btn round color="positive" icon="add" to="/new"></q-btn>
        </div>
      </div>
      <Note-card
        v-for="({ title, description }, index) in notes"
        :key="index"
        :title="title"
        :description="description"
      />
    </Container>
  </q-page>
</template>
