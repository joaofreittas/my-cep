<template>
  <div class="container">
    <Menu />
    <b-form-input
      class="mt-3"
      id="input"
      v-model="cep" 
      placeholder="digite seu cep"
      v-mask="'#####-###'"
      @input="findCEP"
    >
    </b-form-input>
    <b-skeleton-wrapper v-if="searching" :loading="loading" class="mt-3" id="result">
      <template #loading>
        <b-card>
          <b-skeleton width="45%"></b-skeleton>
          <b-skeleton width="35%"></b-skeleton>
          <b-skeleton width="30%"></b-skeleton>
          <b-skeleton width="25%"></b-skeleton>
        </b-card>
      </template>

      <b-card class="mt-3" id="result" v-if="!address.erro">
        <section>
          Rua: {{address.logradouro}} <br>
          Cidade: {{address.localidade}} <br>
          Bairro: {{address.bairro}} <br>
          CEP: {{address.cep}} <br>
        </section>
      </b-card>
      <section v-if="address.erro" class="error mt-4">
        <p>Endereço não encontrado :(</p>
      </section>
    </b-skeleton-wrapper>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cep:'',
      loading:true,
      searching:false,
      address: {}
    }
  },
  methods:{
    async findCEP(cep){
      this.searching = cep.length !== 0
      if(!this.validCEP(cep)){
        this.loading = true
        return;
      }
      try{
        this.loading = true;
        const { data: address } = await this.$axios.get(`/${cep}/json`)
        this.address = address
      }catch(error) {
        console.log('error :>> ', error)
      }finally {
        this.loading = false;
      }
    },
    validCEP(cep){
      let parsed = cep.split('-').join('')
      let cepBase = '12345678'
      return parsed.length === cepBase.length
    }
  }
}
</script>
<style>
#input{
  margin:0 auto;
  width: 90%;
}
#result{
  margin:0 auto;
  width: 90%;
}
.error{
  margin:0 auto;
  margin-top:1%;
  text-align: center;
  color: rgb(187, 202, 104);
  font-weight: 600;
}
</style>
