<template>
  <section class="page">
    <div class="articles__title">All Posts</div>
    <div class="page__list">
      <table-component
        @edit="handleEdit($event)"
        @delete="handleDelete($event)"
        :headers="tableHeaders"
        :items="tableBody"
        paginate
      />
    </div>
  </section>
</template>

<script src="./page.view.js"></script>

<style lang="scss" scoped></style>
