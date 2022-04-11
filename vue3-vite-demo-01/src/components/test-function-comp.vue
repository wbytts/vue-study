<script>
import { h } from 'vue'

function Comp (props, context) {
  return h(`h${props.level}`, context.attrs, context.slots)
}

Comp.props = ['level']

export default Comp
</script>



