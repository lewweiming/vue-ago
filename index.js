import VAgo from "./VAgo.vue";

const install = (Vue) => {
  Vue.component(VAgo.name, VAgo);
};

VAgo.install = install;

export default VAgo;