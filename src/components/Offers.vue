<template>
  <div class="flex ai-center offers">
    <div class="wid-33" v-for="item in offers" :key="item.id">
      <div class="wrapper" :class="{ central: item.central }">
        <div class="offer-item">
          <h6 class="heading">{{ item.packageName }}</h6>
          <p class="price-full" v-if="!changePrice">
            <span class="dollar">&dollar;</span>{{ item.fullPrice }}
          </p>
          <p class="price-monthly" v-if="changePrice">
            <span class="dollar">&dollar;</span>{{ item.monthlyPrice }}
          </p>
          <div class="benefits">
            <p class="benefit">1 TB Storage</p>
            <p class="benefit">5 Users Allowed</p>
            <p class="benefit">Send up to 10 GB</p>
          </div>
          <div class="button-container">
            <div class="button-wrapper">
              <button class="button">Learn More</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Offers",
  props: {
    offers: Array,
    changePrice: Boolean
  }
};
</script>
<style lang="scss">
.offers {
  .wid-33 {
    &:first-of-type {
      .wrapper {
        border-radius: 10px 0 0 10px;
      }
    }
    &:last-of-type {
      .wrapper {
        border-radius: 0 10px 10px 0;
      }
    }
  }
  .wrapper {
    background: white;
    color: $grayishBlue;
    border-radius: 10px;
    padding: 2rem 0;
    &.central {
      background: $gradient;
      padding: 3.5rem 0;
      color: white;
      .offer-item {
        .button-container {
          .button-wrapper {
            background: white;
            .button {
              background-clip: text;
              -webkit-text-fill-color: transparent;
            }
            &:hover {
              border-color: white;
              .button {
                background: $gradient;
                border-color: white;
                color: white;
                -webkit-text-fill-color: white;
              }
            }
          }
        }
      }
    }
    .offer-item {
      text-align: center;
      padding: 0 1.93rem;
      font-weight: 600;
      .heading {
        font-size: 18px;
        padding: 0 0 1.1rem;
      }
      .price-full,
      .price-monthly {
        font-size: 72px;
        letter-spacing: -4px;
        padding-left: 1.5rem;
        position: relative;
        .dollar {
          font-size: 40px;
          position: absolute;
          top: 50%;
          transform: translateY(-50%);
          left: 0.6rem;
        }
      }
      .benefits {
        padding: 1.55rem 0 0;
        .benefit {
          padding: 1.02rem 0;
          &:first-of-type,
          &:last-of-type {
            border: 1px $lightGrayishBlue;
            border-style: solid none solid none;
          }
        }
      }
      .button-container {
        padding: 2.05rem 0 0;
        .button-wrapper {
          border-radius: 10px;
          border: 1px solid transparent;
          &:hover {
            transition: all 0.5s linear;
            border-color: $darkGrayishBlue;
            background: $gradient;
            background-clip: text;
            -webkit-text-fill-color: transparent;
            .button {
              transition: all 0.5s linear;
              background: transparent;
            }
          }
          button {
            border-radius: 10px;
            text-transform: uppercase;
            font-size: 14px;
            word-spacing: 1px;
            letter-spacing: 1px;
            width: 100%;
            padding: 0.85rem 0;
            background: $gradient;
            color: white;
            cursor: pointer;
          }
        }
      }
    }
  }
}
</style>
