<template>
  <div class="parent-container">
    <h1>Comments</h1>
    <form class="form-container">
      <textarea
        type="text"
        v-model="message"
        name="message"
        placeholder="message"
      />

      <input type="text" v-model="author" name="author" placeholder="Name" />

      <button type="submit" v-on:click.prevent="addComment">Enviar</button>
    </form>
  </div>
  <p v-if="comments.length <= 0">Sem comentários...</p>

  <div v-else class="comments-container">
    <CommentsContainer
      v-for="(comment, index) in allComments"
      v-bind:key="index"
      :author="comment.author"
      :message="comment.message"
      v-on:remove-comment="removeComment(index)"
      v-on:edit-comment="editComment(index)"
    />
  </div>
</template>

<script>
import CommentsContainer from "./components/CommentsContainer.vue";

export default {
  name: "App",
  components: {
    CommentsContainer,
  },
  data() {
    return {
      comments: [],
      author: "",
      message: "",
    };
  },
  methods: {
    addComment() {
      if (this.message.trim() === "") {
        return;
      }

      this.comments.push({
        author: this.author,
        message: this.message,
      });

      this.author = "";
      this.message = "";
    },
    removeComment(index) {
      this.comments.splice(index, 1);
    },
    editComment(index) {
      this.author = this.comments[index].author;
      this.message = this.comments[index].message;

      this.comments.splice(index, 1);
    },
  },
  computed: {
    allComments() {
      return this.comments.map((comment) => ({
        ...comment,
        author: comment.author.trim() === "" ? "Anônimo" : comment.author,
      }));
    },
  },
};
</script>

<style lang="scss">
@import "./scss/global.scss";

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
  overflow: hidden;
}

.parent-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    margin-bottom: 2rem;
  }

  .form-container {
    display: flex;
    flex-direction: column;
    width: 28rem;

    textarea {
      height: 8rem;
      margin-bottom: 2rem;

      padding: 0.5rem 1rem;

      border-radius: 15px;
    }

    input[type="text"] {
      padding: 0.5rem 1rem;
      margin-bottom: 2rem;

      border-radius: 15px;
    }

    button[type="submit"] {
      align-self: center;

      padding: 1rem 4rem;
      margin-bottom: 2rem;

      background: #4bb543;
      border-radius: 15px;
      border: none;

      color: #fff;
      text-transform: uppercase;
      letter-spacing: 0.1rem;
      font-weight: bold;

      transition: all 350ms ease-in-out;

      &:hover {
        transform: scale(1.1);
      }
    }
  }

  @media screen and (max-width: 500px) {
    #app {
      margin-bottom: 1rem;
    }

    .parent-container {
      width: 100%;
    }

    textarea,
    input[type="text"] {
      width: 90%;
      margin: 0 auto;
    }
  }
}

.comments-container {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: flex-start;

  padding: 2rem 10rem;

  @media screen and (max-width: 935px) {
    justify-content: center;
  }

  @media screen and (max-width: 500px) {
    padding: 0;
  }
}
</style>
