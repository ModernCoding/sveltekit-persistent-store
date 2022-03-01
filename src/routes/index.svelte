<script type="text/javascript">
  import { userName } from '../stores'
</script>


{ #if $userName }
  <h1>{ $userName }</h1>

{ :else }
  <h1>Please wait...</h1>

{ /if }

<input type="text" bind:value={ $userName }>