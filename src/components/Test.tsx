import { defineComponent } from 'vue'

interface propsType {
  data: string
}
export default defineComponent({
  props: {
    data: {
      type: String,
      default: ''
    }
  },
  setup () {
    return (props: propsType) => (
      <div>
        <div>i am Test, props is {props.data}</div>
      </div>
    )
  }
})
