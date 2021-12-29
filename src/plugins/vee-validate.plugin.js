import { configure, } from 'vee-validate'
// import { extend } from 'vee-validate';


configure({
  classes: {
    valid: 'is-valid',
    invalid: 'is-invalid',
    dirty: ['is-dirty', 'is-dirty'], 
  },
})



