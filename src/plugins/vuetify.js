import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

import colors from 'vuetify/lib/util/colors'

Vue.use(Vuetify);

export default new Vuetify({
    dark: true,
    theme: {
        dark: true,
        themes: {
            dark: {
                primary: colors.indigo.base,
                secondary: colors.blue.accent1,
                accent: colors.shades.black,
                success: colors.lightGreen.accent4,
                error: colors.red.darken4,
            },
        },
    },
});
