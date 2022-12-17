<script lang="ts">
</script>

<div class="bg-[url('/background.svg')] bg-cover h-screen w-screen">
	<form
		action="?/login"
		method="POST"
		class="bg-slate-200 rounded-lg flex flex-col justify-center gap-10 p-10 h-70 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 shadow-xl"
	>
		<input
			type="email"
			placeholder="email"
			name="email"
			class="outline-none border p-2 border-gray-300 bg-slate-200 focus:border-sky-300 rounded-lg"
		/>
		<input
			type="password"
			placeholder="contraseña"
			name="password"
			class="outline-none border p-2 border-gray-300 bg-slate-200 focus:border-sky-300 rounded-lg"
		/>
		<input
			type="submit"
			value="login"
			class="bg-sky-300 p-2 hover:cursor-pointer hover:bg-sky-400 rounded-lg"
		/>
	</form>
</div>
