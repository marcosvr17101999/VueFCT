import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    usuarios: [
      {
      nombre:'Ana' ,
      apellidos:' Navarro' ,
      nif:'011111111' ,
      fechaNacimiento:'11-11-11' ,
      telfMovil:'11111111' ,
      email:'Ana11@gmail.com' ,
      rol:'1' ,
      domicilio:'1ana1',
      
    },
    {
      nombre:'Ana22' ,
      apellidos:' Navarro' ,
      nif:'011111111' ,
      fechaNacimiento:'11-11-11' ,
      telfMovil:'11111111' ,
      email:'Ana11@gmail.com' ,
      rol:'1' ,
      domicilio:'1ana1'
    },
    ],
    centros:[
      {
        nombre:'nombreazarquiel',
        cif:'cifazarquiel',
        codigo:'codigoazarquiel',
        nifDirector:'nifDirectorazarquiel',
        direccion:'direccionazarquiel',
        telefono:'telefonoazarquiel',
        email:'emailazarquiel',
        ciclos:[{
          denominacion:'denominacionciclo',
          codigo:'codigociclo',
          nivel:'nivelciclo',
          familiaProfesional:'familiaProfesionalciclo',
          signatura:'signaturaciclo',
          horaPracticas:'440',
        }],
      },
    ],
    empresa:[{
      nombre:'nombreatos',
      cif:'cifatos',
      direccion:'direccionatos',
      telefono:'telefonoatos',
      email:'emailatos',
      nifRepresentante:'nifRepresentanteatos',
      tutores:[{
        nombreTutor:'nombreTutor',
        niftutor:'niftutor1'
      }],

    }]
   
  },
  mutations: {
  },
  actions: {
  },
  modules: {
  }
})
