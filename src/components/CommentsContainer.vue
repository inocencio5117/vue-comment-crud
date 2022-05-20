<template>
  <div class="comments-list-container">
    <span class="comment-author"
      >Autor: <strong>{{ author }}</strong></span
    >
    <p>{{ message }}</p>
    <div class="comments-buttons">
      <a href="#" title="Excluir" @click.prevent="$emit('remove-comment')"
        >Excluir</a
      >
      <a href="#" title="Editar" @click.prevent="$emit('edit-comment')"
        >Editar</a
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "Comments-cotainer",
  props: {
    author: String,
    message: String,
  },
};
</script>

<style scoped lang="scss">
.comments-list-container {
  background: #fff;

  width: 19rem;
  max-height: 19rem;

  padding: 1.5rem 1rem;
  margin: 1rem 1rem 0.5rem;

  border-radius: 15px;
  border: 1px solid black;

  box-shadow: 0 0 3rem lighten(#000, 60%);
  transition: box-shadow 0.2s ease-in-out;
  overflow: auto;

  &::-webkit-scrollbar-track {
    border-radius: 1rem;
    padding: 2px 0;
    background-color: transparent;
  }

  &::-webkit-scrollbar {
    width: 8px;
  }

  &::-webkit-scrollbar-thumb {
    border-radius: 10px;
    box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    background-color: #737272;
    border: 1px solid #000;
  }

  > p {
    margin-top: 1rem;
  }

  &:hover {
    box-shadow: 0 0 4rem lighten(#000, 60%);
  }

  @media screen and (max-width: 500px) {
    &:last-child {
      margin-bottom: 2rem;
    }
  }
}

.comments-buttons {
  margin-top: 2rem;

  > a {
    margin: 1rem;
    text-decoration: none;
    font-weight: bold;
    font-size: inherit;

    &:first-child {
      color: red;
    }

    &:last-child {
      color: blue;
    }

    &:hover {
      transform: scale(1.1);
    }
  }
}
</style>
