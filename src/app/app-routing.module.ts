import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListEmpleadosComponent } from './components/list-empleados/list-empleados.component';
import { CreateEmpleadoComponent } from './components/create-empleado/create-empleado.component';

const routes: Routes = [
  {path:'',redirectTo:'listado-empleados', pathMatch:'full'},
  {path:'listado-empleados',component:ListEmpleadosComponent},
  {path:'create-empleados', component: CreateEmpleadoComponent},
  {path:'**', redirectTo:'listado-empleados'}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
