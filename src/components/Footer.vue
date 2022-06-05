<template>
    <div class="footer q-pt-xl">

      <div class="flex justify-between">
          <div>
            <h4 class="text-weight-bold q-mt-none q-mb-sm">Consulting Agency For Your Business</h4>
            <p class="text-caption">the quick fox jumps over the lazy dog</p>
          </div>
          <div>
            <q-btn color="primary" no-caps class="text-weight-bold text-caption q-pa-sm q-mr-md" size="md" style="width: 163px">Contact Us</q-btn>
          </div>
      </div>


      <div class="flex row justify-between q-mt-xl">
        <div class="flex column">
          <h5 class="text-weight-bold q-mt-none q-mb-md">Company Info</h5>
          <ul class="q-pl-none q-mt-none">
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">About Us</a>
            </li>
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">About Us</a>
            </li>
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">About Us</a>
            </li>
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">About Us</a>
            </li>
          </ul>
        </div>

        <div class="flex column">
          <h5 class="text-weight-bold q-mt-none q-mb-md">Legal</h5>
          <ul class="q-pl-none q-mt-none">
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">About Us</a>
            </li>
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">About Us</a>
            </li>
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">About Us</a>
            </li>
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">About Us</a>
            </li>
          </ul>
        </div>

        <div class="flex column">
          <h5 class="text-weight-bold q-mt-none q-mb-md">Features</h5>
          <ul class="q-pl-none q-mt-none">
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">Business Marketing</a>
            </li>
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">User Analytic</a>
            </li>
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">Live Chat</a>
            </li>
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">Unlimited Support</a>
            </li>
          </ul>
        </div>

        <div class="flex column">
          <h5 class="text-weight-bold q-mt-none q-mb-md">Resources</h5>
          <ul class="q-pl-none q-mt-none">
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">IOS & Android</a>
            </li>
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">Watch a Demo</a>
            </li>
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">Customers</a>
            </li>
            <li style="list-style: none" class="q-mb-sm">
              <a href="#" class="text-weight-light text-caption q-mb-sm text-black" style="text-decoration: none">API</a>
            </li>
          </ul>
        </div>

        <div class="flex column">
          <h5 class="text-weight-bold q-mt-none q-mb-md">Get In Touch</h5>
          <ul class="q-pl-none q-mt-none">
            <li style="list-style: none" class="q-mb-sm items-center flex">
              <BaseIcon class="ic-30 q-mr-sm">phone</BaseIcon>
              <span class="text-body1 text-weight-light">(480) 555-0103</span>
            </li>
            <li style="list-style: none" class="q-mb-sm items-center flex">
              <BaseIcon class="ic-30 q-mr-sm">bx-map</BaseIcon>
              <span class="text-body1 text-weight-light">4517 Washington Ave</span>
            </li>
            <li style="list-style: none" class="q-mb-sm items-center flex">
              <BaseIcon class="ic-24 q-mr-sm">send</BaseIcon>
              <span class="text-body1 text-weight-light">debra.holt@example.com</span>
            </li>
          </ul>
        </div>
      </div>


    </div>
</template>

<script>
import BaseIcon from "./Base/BaseIcon";
export default {
  name: "Footer",
  components: {BaseIcon}
}
</script>

<style lang="scss" scoped>
  .footer{
    padding: 0 200px 50px 200px;
    margin-top: 50px;
  }
</style>