import { watch, ref, onMounted, onUnmounted } from "vue";

const useLocalStorage = (key, defaultValue) => {
  console.log("йоу2");
  const value = ref(defaultValue);
  const read = () => {
    const v = window.localStorage.getItem(key);
    if (v != null) value.value = JSON.parse(v);
  };
  read();

  onMounted(() => {
    window.addEventListener("storage", read);
  });

  onUnmounted(() => {
    window.removeEventListener("storage", read);
  });

  const write = () => {
    console.log("write работает");
    window.localStorage.setItem(key, JSON.stringify(value.value));
  };
  watch([value.value], write);
  return value;
};

export const useLocalNotes = () => {
  return useLocalStorage("notes", []);
};
