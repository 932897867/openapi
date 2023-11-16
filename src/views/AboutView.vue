<template>
  <div class="about">
    <p><h1>This is an about page</h1></p>
    <div>
      <nav>
        <RouterLink to="/about/about1">about1</RouterLink>
        <RouterLink to="/about/about2">about2</RouterLink>
      </nav>
    </div>
    <RouterView />
  </div>
</template>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    align-items: center;
  }
}
</style>
