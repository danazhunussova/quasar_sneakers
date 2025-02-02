<template>
  <q-page
    class="q-pa-xl page-background"
    :class="{ 'sequence-start': typingAnimationDone }"
  >
    <div
      id="heart-cursor"
      :style="{ left: cursorX - 15 + 'px', top: cursorY - 28 + 'px' }"
    >
      ♥
    </div>
    <div class="rozha-one">
      <div
        :style="{ color: '#6b0111' }"
        class="text-h4 q-py-xl title-size monsieur-la-doulaise-regular"
      >
        Hey gorgeous!
      </div>
      <div class="typing-container">
        <h6 ref="typingText" class="typing-text">
          <span class="cursor">|</span>
        </h6>
      </div>

      <div class="text-h6 q-py-sm appear-animation delay-1 q-mt-lg">
        <span :style="{ color: '#6b0111' }">💋 Here all the details ↓</span>
      </div>
      <div class="appear-animation delay-2">
        <img src="../assets/mymemoji.png" alt="My Emoji" class="my-emoji" />
      </div>

      <div class="q-py-sm appear-animation delay-3">
        <q-icon name="event" size="xs" class="q-mr-sm" />
        <span>February 8th, 6:00PM</span>
      </div>
      <div class="q-py-sm appear-animation delay-4">
        <q-icon name="place" size="xs" class="q-mr-sm" />
        <span>Gasteria, Turan 22/1</span>
      </div>
    </div>

    <div class="q-my-sm appear-animation delay-5">
      <q-btn
        class="full-width"
        flat
        :style="{ backgroundColor: '#6b0111', color: 'white' }"
        label="Add to Google Calendar"
        @click="addToCalendar"
      />
    </div>
    <div class="q-my-sm appear-animation delay-5">
      <q-btn
        outline
        class="full-width outline"
        :style="{ color: '#6b0111' }"
        label="View on 2GIS"
        @click="viewOn2gis"
      />
    </div>
    <div
      class="monsieur-la-doulaise-regular subtitle-size appear-animation delay-6 text-right"
    >
      with love, Dana
    </div>
  </q-page>
</template>

<script setup>
import {
  ref,
  onMounted,
  watch,
  reactive,
  provide,
  computed,
  inject,
  onUnmounted,
} from "vue";
import axios from "axios";

const cursorX = ref(0);
const cursorY = ref(0);

const handleTouchMove = (event) => {
  updateCursorPosition(event);
};

const updateCursorPosition = (event) => {
  if (event.touches.length > 0) {
    cursorX.value = event.touches[0].clientX;
    cursorY.value = event.touches[0].clientY;
  }
};

const hideNativeCursor = () => {
  document.body.style.cursor = "none";
};

onMounted(() => {
  window.addEventListener("touchmove", handleTouchMove);
  hideNativeCursor();
});

onUnmounted(() => {
  window.removeEventListener("touchmove", handleTouchMove);
  document.body.style.cursor = "";
});

const typingText = ref(null);
const typingAnimationDone = ref(false);

const textToType = `You're invited to my bday!\n 
Dress classy and fabulous for tiktoks, yapping, photos, and a cozy dinner.\n 
I hope you can make it!`;

onMounted(() => {
  if (typingText.value) {
    startTyping();
  }
});

function startTyping() {
  let i = 0;
  const speed = 50; // Adjust typing speed (milliseconds)

  function type() {
    if (i < textToType.length) {
      const currentText = textToType.slice(0, i + 1);
      typingText.value.innerHTML =
        currentText + '<span class="cursor">|</span>';
      i++;
      setTimeout(type, speed);
    } else {
      typingAnimationDone.value = true;
    }
  }

  type();
}

function addToCalendar() {
  const eventDetails = {
    title: "Dana's Birthday",
    start: "20250208T180000",
    end: "20250208T230000",
    location: "Gasteria, Turan 22/1.",
    description: "https://2gis.kz/astana/geo/70000001062012206",
  };
  const googleCalendarLink = generateGoogleCalendarLink(eventDetails);
  window.open(googleCalendarLink, "_blank");
}

function generateGoogleCalendarLink(event) {
  const baseUrl = "https://www.google.com/calendar/render?action=TEMPLATE";
  const encodedTitle = encodeURIComponent(event.title);
  const encodedStart = encodeURIComponent(event.start);
  const encodedEnd = encodeURIComponent(event.end);
  const encodedLocation = encodeURIComponent(event.location);
  const encodedDetails = encodeURIComponent(event.description);
  return `${baseUrl}&text=${encodedTitle}&dates=${encodedStart}/${encodedEnd}&location=${encodedLocation}&details=${encodedDetails}`;
}

function viewOn2gis() {
  const locationLink = "https://2gis.kz/astana/geo/70000001062012206";
  window.open(locationLink, "_blank");
}
</script>

<style>
.page-background {
  background-size: cover;
}
@media (max-width: 430px) {
  .page-background {
    background-image: url("../assets/background.jpg");
    background-size: cover;
    background-repeat: no-repeat;
  }
}

#heart-cursor {
  position: fixed;
  pointer-events: none;
  font-size: 44px;
  color: rgb(169, 32, 32);
  z-index: 9999;
  transition: transform 0.1s;
}

.ballet-font {
  font-family: "Ballet", serif;
  font-optical-sizing: auto;
  font-weight: 400;
  font-style: normal;
}
.herr-font {
  font-family: "Herr Von Muellerhoff", cursive;
}
.monsieur-la-doulaise-regular {
  font-family: "Monsieur La Doulaise", serif;
  font-weight: 400;
  font-style: normal;
}
.rozha-one {
  font-family: "Rozha One", serif;
  font-weight: 400;
  font-style: normal;
}

.title-size {
  font-size: 4rem;
}
.subtitle-size {
  font-size: 2rem;
}

.my-emoji {
  max-width: 10em;
  height: auto;
  display: block;
  margin: 5px;
  float: right;
}
.typing-container {
  margin: 0 auto;
  text-align: left;
}

.typing-text {
  white-space: pre-line;
  margin: 0;
  padding: 0;
  min-height: 150px;
}

.cursor {
  color: #6b0111;
  animation: blink 0.75s step-end infinite;
}

@keyframes blink {
  from,
  to {
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
}

.appear-animation {
  opacity: 0;
}

.sequence-start .appear-animation {
  animation: appear 1s ease forwards;
}

@keyframes appear {
  to {
    opacity: 1;
  }
}

.sequence-start .delay-1 {
  animation-delay: 0.8s;
}
.sequence-start .delay-2 {
  animation-delay: 1.4s;
}
.sequence-start .delay-3 {
  animation-delay: 2s;
}
.sequence-start .delay-4 {
  animation-delay: 2.5s;
}
.sequence-start .delay-5 {
  animation-delay: 3s;
}
.sequence-start .delay-6 {
  animation-delay: 3.5s;
}
</style>