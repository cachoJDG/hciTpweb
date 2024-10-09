<template>
    <v-app class="bg-purple-lighten-2">
      <div>
        <v-row justify="space-evenly" align="center" class="ma-4">
          <v-col cols="3">
            <v-card class="rounded-xl" color="white" style="width:300px;">
              <v-card-title class="text-h4 font-weight-medium">Tu saldo</v-card-title>
              <v-card-text class="text-h4 font-weight-bold text-purple-lighten-3">$ 20.000</v-card-text>
            </v-card>
          </v-col>
          <v-col cols="3">
            <v-container>
              <v-row>
                <v-btn class="text-black ma-2" rounded="lg" height="80" width="300" size="x-large"
                  color="deep-purple-lighten-3">Ver mi
                  cvu</v-btn>
              </v-row>
              <v-row>
                <v-btn class="text-black ma-2" rounded="lg" height="80" width="300" size="x-large"
                  color="deep-purple-lighten-3">Transferir
                  dinero</v-btn>
              </v-row>
            </v-container>
          </v-col>
        </v-row>
      </div>
      <!-- lista de movimientos, es muy largo xq meti muchos items iguales (cada item deberia ser un componente)-->
      <div>
        <v-container>
          <v-card class="rounded-xl pr-2 overflow-auto" color="white">
            <v-card-title class="text-h5 font-weight-medium pb-0">Movimientos</v-card-title>
            <v-list bg-color="white" class="pt-0" max-height="400px">
              <v-list-item>
                <v-card class="bg-deep-purple-lighten-3 text-black">
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="text-h6 font-weight-bold pb-0 ma-0">Transferencia</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="text-h6 text-red-darken-1 font-weight-bold pb-0 ma-0">-$1000</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="pt-0 ma-0">Juan Gago</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="pt-0 pl-4 ma-0">Fecha</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-list-item>
              <v-list-item>
                <v-card class="bg-deep-purple-lighten-3 elevation-0 text-black">
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="text-h6 font-weight-bold pb-0 ma-0">Transferencia</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="text-h6 text-teal-lighten-1 font-weight-bold pb-0 ma-0">+$1000</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="pt-0 ma-0">Juan Gago</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="pt-0 pl-4 ma-0">Fecha</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-list-item>
              <v-list-item>
                <v-card class="bg-deep-purple-lighten-3 elevation-0 text-black">
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="text-h6 font-weight-bold pb-0 ma-0">Transferencia</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="text-h6 text-red-darken-1 font-weight-bold pb-0 ma-0">-$1000</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="pt-0 ma-0">Juan Gago</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="pt-0 pl-4 ma-0">Fecha</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-list-item>
              <v-list-item>
                <v-card class="bg-deep-purple-lighten-3 elevation-0 text-black">
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="text-h6 font-weight-bold pb-0 ma-0">Transferencia</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="text-h6 text-red-darken-1 font-weight-bold pb-0 ma-0">-$1000</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="pt-0 ma-0">Juan Gago</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="pt-0 pl-4 ma-0">Fecha</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-list-item>
              <v-list-item>
                <v-card class="bg-deep-purple-lighten-3 text-black">
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="text-h6 font-weight-bold pb-0 ma-0">Transferencia</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="text-h6 text-red-darken-1 font-weight-bold pb-0 ma-0">-$1000</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="pt-0 ma-0">Juan Gago</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="pt-0 pl-4 ma-0">Fecha</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-list-item>
              <v-list-item>
                <v-card class="bg-deep-purple-lighten-3 elevation-0 text-black">
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="text-h6 font-weight-bold pb-0 ma-0">Transferencia</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="text-h6 text-red-darken-1 font-weight-bold pb-0 ma-0">-$1000</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="pt-0 ma-0">Juan Gago</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="pt-0 pl-4 ma-0">Fecha</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-list-item>
              <v-list-item>
                <v-card class="bg-deep-purple-lighten-3 elevation-0 text-black">
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="text-h6 font-weight-bold pb-0 ma-0">Transferencia</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="text-h6 text-red-darken-1 font-weight-bold pb-0 ma-0">-$1000</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                  <div>
                    <v-row justify="space-evenly">
                      <v-col cols="2">
                        <v-card-item class="pt-0 ma-0">Juan Gago</v-card-item>
                      </v-col>
                      <v-col cols="2">
                        <v-card-item class="pt-0 pl-4 ma-0">Fecha</v-card-item>
                      </v-col>
                    </v-row>
                  </div>
                </v-card>
              </v-list-item>
            </v-list>
            <div class="text-end mt-2">
              <v-btn class="text-black mb-4 mr-4" color="deep-purple-lighten-2" size="large">Ver mas</v-btn>
            </div>
          </v-card>
        </v-container>
      </div>
    </v-app>
  </template>