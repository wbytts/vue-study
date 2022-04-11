import { ref, onMounted, onUnmounted, computed } from 'vue';

export default function useMouse() {
  const x = ref(0);
  const y = ref(0);
  let update = e => {
    x.value = e.pageX;
    y.value = e.pageY;
  };
  onMounted(() => window.addEventListener('mousemove', update));
  onUnmounted(() => window.removeEventListener('mousemove'));

  let color = computed(() => (x > y ? 'red' : 'green'));

  return { x, y, color };
}
