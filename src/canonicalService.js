import { ref } from 'vue';

const links = ref([]);

export const canonicalService = {
    addLink(link) {
        // Eliminar enlaces antiguos antes de agregar uno nuevo
        links.value = links.value.filter(existingLink => existingLink !== link);
        links.value.push(link);
        updateHead();
        },
    removeLink(link) {
        links.value = links.value.filter(existingLink => existingLink !== link);
        updateHead();
    },
};

function updateHead() {
  const existingCanonicalLinks = document.head.querySelectorAll('link[rel="canonical"]');
  existingCanonicalLinks.forEach(link => link.parentNode.removeChild(link));

  links.value.forEach(link => {
    const canonicalTag = document.createElement('link');
    canonicalTag.rel = 'canonical';
    canonicalTag.href = link;
    document.head.appendChild(canonicalTag);
  });
}
