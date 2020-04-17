<template>
  <div id="app">
    <div id="header">
      <div class="container">
        <div>
          <h1>{{ header.heading }}</h1>
          <div class="toggle-container">
            <span>{{ header.optionOne }}</span>
            <label
              for="toggle"
              class="toggle"
              :class="{ active: header.changePrice }"
            >
              <input
                type="checkbox"
                id="toggle"
                class="hide"
                v-model="header.changePrice"
              />
            </label>
            <span>{{ header.optionTwo }}</span>
          </div>
        </div>
      </div>
    </div>
    <div id="main">
      <div class="container">
        <offers :offers="offers" :changePrice="header.changePrice"></offers>
      </div>
    </div>
  </div>
</template>

<script>
import Offers from "./components/Offers";
export default {
  name: "App",
  components: { Offers },
  data() {
    return {
      header: {
        heading: "Our Pricing",
        optionOne: "Annually",
        optionTwo: "Monthly",
        changePrice: false
      },
      offers: [
        {
          packageName: "Basic",
          monthlyPrice: 19.99,
          fullPrice: 199.99,
          benefits: [
            { first: "500 GB Storage" },
            { second: "2 Users Allowed" },
            { third: "Send up to 3 GB" }
          ],
          central: false
        },
        {
          packageName: "Professional",
          monthlyPrice: 24.99,
          fullPrice: 249.99,
          benefits: [
            { first: "1 TB Storage" },
            { second: "5 Users Allowed" },
            { third: "Send up to 10 GB" }
          ],
          central: true
        },
        {
          packageName: "Master",
          monthlyPrice: 39.99,
          fullPrice: 399.99,
          benefits: [
            { first: "2 TB Storage" },
            { second: "10 Users Allowed" },
            { third: "Send up to 20 GB" }
          ],
          central: false
        }
      ]
    };
  }
};
</script>
<style lang="scss">
#app {
  min-height: 100vh;
  #header {
    padding-top: 4.5rem;
    padding-bottom: 3.8rem;
    @include resp("s") {
      padding-top: 4rem;
    }
    & > div {
      text-align: center;
      h1 {
        font-size: 31px;
        @include resp("s") {
          word-spacing: -3px;
          letter-spacing: 1px;
        }
      }
      .toggle-container {
        display: table;
        margin: 0 auto;
        padding-top: 2.5rem;
        span {
          font-weight: 600;
          display: table-cell;
          vertical-align: middle;
          color: $lightGrayishBlue;
        }
        .toggle {
          display: inline-block;
          position: relative;
          width: 3.5rem;
          height: 2rem;
          border-radius: 1rem;
          margin: 0 1.5rem;
          background: $gradient;
          cursor: pointer;
          &:before {
            content: "";
            width: 1.5rem;
            height: 1.5rem;
            background-color: white;
            border-radius: 50%;
            position: absolute;
            left: 0.25rem;
            top: 50%;
            transform: translateY(-50%);
            transition: all 0.5s linear;
          }
          &.active {
            &::before {
              left: 1.75rem;
            }
          }
          &:hover {
            transition: all 0.5s linear;
            opacity: 0.8;
          }
        }
      }
    }
  }
  #main {
    @include resp("s") {
      padding-top: 1rem;
    }
  }
}
</style>
