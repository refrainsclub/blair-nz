<template>
  <header class="bg-white">
    <nav
      class="mx-auto flex max-w-7xl items-center justify-between p-6 lg:px-8"
      aria-label="Global"
    >
      <div class="flex lg:flex-1">
        <nuxt-link
          to="/"
          class="-m-1.5 p-1.5 font-bold"
        >
          Blair
        </nuxt-link>
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon
            class="h-6 w-6"
            aria-hidden="true"
          />
        </button>
      </div>
      <div class="hidden lg:flex lg:gap-x-12">
        <nuxt-link
          v-for="link in links"
          :key="link"
          class="text-sm font-semibold leading-6 text-gray-900"
          :to="link.to"
        >
          {{ link.name }}
        </nuxt-link>
      </div>
      <div class="hidden lg:flex lg:flex-1 lg:justify-end">
        <nuxt-link
          to="/login"
          class="text-sm font-semibold leading-6 text-gray-900"
        >
          Log in <span aria-hidden="true">&rarr;</span>
        </nuxt-link>
      </div>
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      :open="mobileMenuOpen"
      @close="mobileMenuOpen = false"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <nuxt-link
            to="/"
            class="-m-1.5 p-1.5 font-bold"
            @click="mobileMenuOpen = false"
          >
            Blair
          </nuxt-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon
              class="h-6 w-6"
              aria-hidden="true"
            />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <nuxt-link
                v-for="link in links"
                :key="link"
                href="#"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                :to="link.to"
                @click="mobileMenuOpen = false"
              >
                {{ link.name }}
              </nuxt-link>
            </div>
            <div class="py-6">
              <nuxt-link
                to="/login"
                class="-mx-3 block rounded-lg px-3 py-2.5 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                @click="mobileMenuOpen = false"
              >
                Log in
              </nuxt-link>
            </div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { Dialog, DialogPanel } from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";

const mobileMenuOpen = ref(false);

const links = [
  {
    name: "Projects",
    to: "/projects",
  },
  {
    name: "Contact",
    to: "/contact",
  },
];
</script>
