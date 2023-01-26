<template>
    
        <form id="app" @submit="checkForm">

            <p v-if="errors.length">
                <b>Por favor, corrija o(s) seguinte(s) erro(s):</b>
                <ul>
                    <li v-for="error in errors" :key="error">{{error}}</li>
                </ul>
            </p>

            <div id="username-section" class="username">
                <label>Nome do usuário: </label>
                <input placeholder="Nome Completo" type="text" id="name" v-model="name" name="name"/>
            </div>
            <br>
            <div id="useremail-section" class="email">
                <label>Email do usuário: </label>
                <input placeholder="Email" type="text" id="email" v-model="email" name="email"/>
            </div>
            <br>
            <button @click="register" type="submit" value="Cadastrar">Cadastrar</button>
        </form>
    
    
</template>

<script>
    export default {
        el: '#app',
        data() {
            return {
                errors: [],
                name: null,
                email: null
            }
        },
        methods: {
            checkForm(e) {
                
                if(this.name && this.email) {
                    return true
                }
                
                this.errors = []
                if(!this.name) {
                    this.errors.push('O nome é obrigatório.')
                }
                if(!this.email) {
                    this.errors.push('O email é obrigatório.')
                }
                e.preventDefault()

            }
        },
        

    }
</script>