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
    <ConfirmModalComponent
      :show="confirmDeleteModal"
      title="Delete Article"
      message="Are you sure to delete Article?"
      @close="confirmDeleteModal = false"
      @confirm="deleteArticle()"
    />
  </section>
</template>

<script src="./page.view.js"></script>

<style lang="scss" scoped></style>
