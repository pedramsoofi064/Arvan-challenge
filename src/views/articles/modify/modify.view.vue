<template>
  <section class="modify">
    <div class="articles__title">{{ mode === 'create' ? 'New Article' : 'Edit Article' }}</div>
    <form-component class="modify__form" auto-validation>
      <div class="d-flex">
        <div class="modify__fields">
          <input-component v-model="model.title" rules="required" class="form__input" label="Title" />
          <input-component
            v-model="model.description"
            rules="required"
            class="form__input"
            label="Description"
          />
          <div class="custom-input__container article__body">
            <span class="text-grey6">Body</span>
            <textarea v-model="model.body"></textarea>
          </div>
        </div>
        <div class="modify__tags d-flex">
          <input-component v-model="newTag" rules="" class="form__input" label="New tag" />
          <div class="tags-container">
            <div class="d-flex align-center" v-for="(tag, index) in sortedTags" :key="`tag-${index}`">
              <template v-if="tag">
                <input type="checkbox" :id="`tag-${index}`" :value="tag" v-model="model.tagList" />
                <label :for="`tag-${index}`">{{ tag }}</label>
              </template>
            </div>
          </div>
        </div>
      </div>
      <div class="modify__action">
        <button-component :loading="loading" class="btn primary">Submit</button-component>
      </div>
    </form-component>
  </section>
</template>

<script src="./modify.view.js"></script>

<style lang="scss" src="./modify.view.scss"></style>
