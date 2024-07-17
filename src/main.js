//// https://run.mocky.io/v3/c092427f-22cc-49ab-b2a4-aa5ff94e3984
// categories
//https://run.mocky.io/v3/5c4e01d5-000f-437f-92ba-91543b803ff5
// products
//https://run.mocky.io/v3/5c07cd7d-af1c-40c2-8646-dbbb51297e35
//Sizes
import { createApp } from "vue";
import { createI18n } from "vue-i18n";
import en from "./locale/en.json";
import ar from "./locale/ar.json";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import "maz-ui/styles";

import "@progress/kendo-theme-default/dist/all.css";
import "@fortawesome/fontawesome-free/css/all.css";
import "@fortawesome/fontawesome-free/js/all.js";
import store from "./store";

//Global Components
import { Input } from "@progress/kendo-vue-inputs";
import { RadioButton } from "@progress/kendo-vue-inputs";
import { Button } from "@progress/kendo-vue-buttons";
import { RangeSlider, SliderLabel } from "@progress/kendo-vue-inputs";
import { AutoComplete } from "@progress/kendo-vue-dropdowns";
import { NumericTextBox } from "@progress/kendo-vue-inputs";
import { Checkbox } from "@progress/kendo-vue-inputs";
import ComboBoxComponent from "./components/forms/comboBox/mainView.vue";
import rating from "./components/rating/rating.vue";
import { Dialog, DialogActionsBar } from "@progress/kendo-vue-dialogs";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: en, // use lowercase 'en'
    ar: ar, // use lowercase 'ar'
  },
});

const app = createApp(App);
app.component("KInput", Input);
app.component("base-combobox", ComboBoxComponent);
app.component("radiobutton", RadioButton);
app.component("base-button", Button);
app.component("base-autocomplete", AutoComplete);
app.component("rating", rating);
app.component("NumericTextBox", NumericTextBox);
app.component("checkbox", Checkbox);
app.component("slider", RangeSlider);
app.component("slider-label", SliderLabel);
app.component("k-dialog", Dialog);
app.component("dialog-actions-bar", DialogActionsBar);

app.use(store);
app.use(i18n);
app.use(router);
app.mount("#app");
