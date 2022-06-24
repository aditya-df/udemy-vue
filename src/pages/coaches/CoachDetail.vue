<template>
  <div>
    <section>
      <base-card>
        <h2>{{ fullName }}</h2>
        <h3>${{ rate }}/hour</h3>
      </base-card>
    </section>
    <section>
      <base-card>
        <header>
          <h2>Interested? Reach out now!</h2>
          <base-button link :to="contactLink">Contact</base-button>
        </header>
        <router-view></router-view>
      </base-card>
    </section>
    <section>
      <base-card>
        <base-badge
          v-for="area in areas"
          :key="area"
          :type="area"
          :title="area"
        ></base-badge>
        <p>{{ description }}</p>
      </base-card>
    </section>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
      fullName: '',
      contactLink: '',
      areas: [],
      rate: null,
      description: '',
    };
  },
  methods: {
    setData(data) {
      this.fullName = data.firstName + ' ' + data.lastName;
      this.contactLink = this.$route.path + '/contact';
      this.areas = data.areas;
      this.rate = data.hourlyRate;
      this.description = data.description;
    },
  },
  async created() {
    // set coach in vuex
    await this.$store.dispatch('coaches/loadCoaches', {
      forcedRefresh: true,
    });

    // filtering coach in page from vuex
    const selectedCoach = this.$store.getters['coaches/coaches'].find(
      (coach) => coach.id === this.id
    );

    // setting data for the page
    this.setData(selectedCoach);
  },
};
</script>

<style>
</style>