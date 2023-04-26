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

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'login', component: LoginComponent},
  {path:'addExp', component: NewExperienciaComponent, data: {expectedRol:['admin']}},
  {path:'editExp/:id', component: EditExperienciaComponent, data: {expectedRol:['admin']}},
  {path:'addEdu', component: NewEducacionComponent, data: {expectedRol:['admin']}},
  {path:'editEdu/:id', component: EditEducacionComponent, data: {expectedRol:['admin']}},
  {path:'addHab', component: NewHabilidadComponent, data: {expectedRol:['admin']}},
  {path:'editHab/:id', component: EditHabilidadComponent, data: {expectedRol:['admin']}},
  {path:'editPer/:id', component: EditSobreMiComponent, data: {expectedRol:['admin']}},
  {path:'editProf/:id', component: EditEncabezadoComponent, data: {expectedRol:['admin']}},
  {path:'addProy', component: NewProyectoComponent, data: {expectedRol:['admin']}},
  {path:'editProy/:id', component: EditProyectoComponent, data: {expectedRol:['admin']}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
