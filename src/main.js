import { createApp } from 'vue';
import App from './App.vue';
import 'normalize.css';
import {createRouter, createWebHistory} from 'vue-router';
import VueCookies  from 'vue-cookies';

//Importando links para router link
import Home from './pages/Home.vue'
import Software from './pages/Software.vue'
import Prices from './pages/Prices.vue'
import Contact from './pages/Contact.vue'

// Quienes Somos
import GenealogicHistory from './pages/GenealogicHistory.vue'
import ConsensoMonaco from './pages/ConsensoMonaco.vue'
import LegalLegality from './pages/LegalLegality.vue'
import LegalAdvice from './pages/LegalAdvice.vue'
import InitialRegister from './pages/InitialRegister.vue'
import KCDCertificate from './pages/KCDCertificate.vue'
    // -- Registro Inicial
import DogPapers from './pages/DogPapers.vue'
import WhyWeDoIt from './pages/WhyWeDoIt.vue'
import Pedigree from './pages/Pedigree.vue'
import HowToHatchery from './pages/HowToHatchery.vue'
// Tramites
import FormsPDF from './pages/FormsPDF.vue'
import HatcheryInscription from './pages/HatcheryInscription.vue'
import LechigadaInscription from './pages/LechigadaInscription.vue'
import MachoComplaint from './pages/MachoComplaint.vue'
import OnlineTransfer from './pages/OnlineTransfer.vue'
import RegisterForm from './pages/RegisterForm.vue'
import DogComplaint from './pages/DogComplaint.vue'
// Razas
import CanineGroups from './pages/CanineGroups.vue'
import DogPattern from './pages/DogPattern.vue'
// Reglamentos
import Regulations from './pages/Regulations.vue'
import StandardsReg from './pages/StandardsReg.vue'
import HatcheryReg from './pages/HatcheryReg.vue'
import AnexoI from './pages/AnexoI.vue'
import JudgeReg from './pages/JudgeReg.vue'


// Configurando el router
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes: [
        { path: '/', component: Home },
        { path: '/software', component: Software },
        { path: '/lista-de-precios', component: Prices },
        { path: '/contacto', component: Contact },
        // Quienes Somos
        { path: '/historia-de-los-registros-genealogicos', component: GenealogicHistory },
        { path: '/usos-y-costumbres-en-materia-de-crianza', component: ConsensoMonaco },
        { path: '/legalidad-juridica', component: LegalLegality },
        { path: '/asesoramiento-frente-a-reclamos', component: LegalAdvice},
        { path: '/que-es-un-registro-inicial', component: InitialRegister},
        { path: '/certificado-por-KCD', component: KCDCertificate},
        //  -- Registro Inicial
        { path: '/como-hacerle-los-papeles-a-un-perro', component: DogPapers}, 
        { path: '/por-que-lo-hacemos', component: WhyWeDoIt}, 
        { path: '/significado-pedigree', component: Pedigree}, 
        { path: '/como-tener-criadero-oficial', component: HowToHatchery}, 
        // Tramites
        { path: '/formularios-pdf', component: FormsPDF},
        { path: '/inscripcion-criadero', component: HatcheryInscription},
        { path: '/inscripcion-lechigada', component: LechigadaInscription},
        { path: '/denuncia-de-servicio-dueno-del-macho', component: MachoComplaint},
        { path: '/transferencias-online', component: OnlineTransfer},
        { path: '/formulario-registros-iniciales', component: RegisterForm},
        { path: '/denuncia-de-venta-de-canino', component: DogComplaint},
        // Razas
        { path: '/grupos-caninos', component: CanineGroups},
        { path: '/patron-de-los-mantos-de-los-perros', component: DogPattern},
        // Reglamentos
        { path: '/reglamentos-kcd', component: Regulations},
        { path: '/normas-de-excelencia', component: StandardsReg},
        { path: '/reglamento-de-crianza-y-criaderos', component: HatcheryReg},
        { path: '/anexo-categorias-y-duracion-de-criaderos', component: AnexoI},
        { path: '/reglamento-de-jueces', component: JudgeReg},
        
    ],
    });
    
    


//Creando App Vue
createApp(App)
.use(router)
.use(VueCookies, {
    expires:'1d',
})
.mount('#app'); 

