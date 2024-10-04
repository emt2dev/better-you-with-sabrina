<template>
  <section>
    <!-- Navigation -->
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container px-4 px-lg-5 d-flex align-items-center">
        <RouterLink class="navbar-brand d-flex align-items-center" to="/">
          <!-- Conditional rendering to hide image on mobile -->
          <img 
            class="img-fluid rounded-circle me-2 d-none d-lg-block" 
            src="/public/logo.png" 
            alt="Better You by Sabrina, LLC" 
          />
          <span class="navbar-title d-lg-none">Better You with Sabrina</span>
        </RouterLink>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <div class="collapse navbar-collapse" id="navbarNav">
          <div class="navbar-links d-flex align-items-center ms-auto">
            <RouterLink class="nav-link me-3" to="/">Home</RouterLink>
            <RouterLink class="nav-link me-3" to="/about">Who am I?</RouterLink>
            <a class="btn btn-link" href="https://linktr.ee/betteryoubysabrina">All my info</a>
          </div>
        </div>
      </div>
    </nav>
  </section>
</template>

<script setup>
</script>

<style scoped>
.navbar-title {
  font-size: 1.5rem;
  font-weight: bold;
  color: #333;
}

.navbar-links {
  flex-grow: 1;
}

.nav-link {
  font-size: 1rem;
  color: #007bff;
  text-decoration: none;
}

.nav-link:hover {
  text-decoration: underline;
  color: #0056b3;
}

.btn-link {
  color: #28a745;
}

.btn-link:hover {
  color: #218838;
  text-decoration: underline;
}

/* Add some custom styles for the navbar toggler */
.navbar-toggler {
  border: none;
}

.navbar-toggler-icon {
  background-color: #007bff; /* Change color as needed */
}
</style>
