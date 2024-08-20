import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './componentes/home/home.component';
import { LoginComponent } from './componentes/login/login.component';
import { NewExperienciaComponent } from './componentes/experiencia/new-experiencia/new-experiencia.component';
import { EditExperienciaComponent } from './componentes/experiencia/edit-experiencia/edit-experiencia.component';
import { NewEducacionComponent } from './componentes/educacion/new-educacion/new-educacion.component';
import { EditEducacionComponent } from './componentes/educacion/edit-educacion/edit-educacion.component';
import { NewHabilidadComponent } from './componentes/habilidades/new-habilidad/new-habilidad.component';
import { EditHabilidadComponent } from './componentes/habilidades/edit-habilidad/edit-habilidad.component';
import { EditSobreMiComponent } from './componentes/sobre-mi/edit-sobre-mi/edit-sobre-mi.component';
import { EditEncabezadoComponent } from './componentes/encabezado/edit-encabezado/edit-encabezado.component';
import { EditProyectoComponent } from './componentes/proyectos/edit-proyecto/edit-proyecto.component';
import { NewProyectoComponent } from './componentes/proyectos/new-proyecto/new-proyecto.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { HabilidadesComponent } from './componentes/habilidades/habilidades.component';
import { SobreMiComponent } from './componentes/sobre-mi/sobre-mi.component';
import { ProyectosComponent } from './componentes/proyectos/proyectos.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';
import { AdminGuard } from './auth/admin.guard';

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'experiences', component: ExperienciaComponent},
  {path:'addExp', component: NewExperienciaComponent, canActivate: [AdminGuard], data: {expectedRol:['admin']}},
  {path:'editExp/:id', component: EditExperienciaComponent, canActivate: [AdminGuard], data: {expectedRol:['admin']}},
  {path:'educations', component: EducacionComponent},
  {path:'addEdu', component: NewEducacionComponent, canActivate: [AdminGuard], data: {expectedRol:['admin']}},
  {path:'editEdu/:id', component: EditEducacionComponent, canActivate: [AdminGuard], data: {expectedRol:['admin']}},
  {path:'skills', component: HabilidadesComponent},
  {path:'addHab', component: NewHabilidadComponent, canActivate: [AdminGuard], data: {expectedRol:['admin']}},
  {path:'editHab/:id', component: EditHabilidadComponent, canActivate: [AdminGuard], data: {expectedRol:['admin']}},
  {path:'about', component: SobreMiComponent},
  {path:'editPer/:id', component: EditSobreMiComponent, canActivate: [AdminGuard], data: {expectedRol:['admin']}},
  {path:'editProf/:id', component: EditEncabezadoComponent, canActivate: [AdminGuard], data: {expectedRol:['admin']}},
  {path:'projects', component: ProyectosComponent},
  {path:'addProj', component: NewProyectoComponent, canActivate: [AdminGuard], data: {expectedRol:['admin']}},
  {path:'editProj/:id', component: EditProyectoComponent, canActivate: [AdminGuard], data: {expectedRol:['admin']}},
  {path:'contact', component: ContactoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }