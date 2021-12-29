import formComponent from '@/common/components/form.component.vue'
import inputComponent from '@/common/components/input.component.vue'
import buttonComponent from '@/common/components/button.component.vue'

export default {
    name: 'Register',
    components: {
        formComponent,
        inputComponent,
        buttonComponent
    },
    data() {
        return {
            loading: false,
            model: {
                email: '',
                password: '',
                user: ''
            }
        }
    }
}