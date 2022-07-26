<template>
  <q-layout view="lHh lpr lFf">
    <q-page-container>
      <q-page>
        <q-carousel
          animated
          v-model="slide"
          arrows
          swipeable
          navigation
          infinite
          autoplay
          control-color="white"
          transition-prev="slide-right"
          transition-next="slide-left"
          height="635px"
        >
          <q-carousel-slide
            class="q-pa-none"
            :name="1"
            img-src="../assets/radzevičius.jpg"
          >
            <div
              class="full-height full-width flex flex-center"
              style="background-color: rgba(114, 119, 131) !important"
            ></div>
          </q-carousel-slide>

          <q-carousel-slide
            class="q-pa-none"
            :name="2"
            img-src="../assets/buva.jpeg"
          >
            <div
              class="full-height full-width flex flex-center"
              style="background-color: rgba(114, 119, 131) !important"
            ></div>
          </q-carousel-slide>

          <q-carousel-slide
            class="q-pa-none"
            :name="3"
            img-src="../assets/speedy.jpg"
          >
            <div
              class="full-height full-width flex flex-center"
              style="background-color: rgba(114, 119, 131) !important"
            ></div>
          </q-carousel-slide>

          <q-carousel-slide
            class="q-pa-none"
            :name="4"
            img-src="../assets/žibėnas.jpg"
          >
            <div
              class="full-height full-width flex flex-center"
              style="background-color: rgba(114, 119, 131) !important"
            ></div>
          </q-carousel-slide>

          <q-carousel-slide
            class="q-pa-none"
            :name="5"
            img-src="../assets/komanda.jpg"
          >
            <div
              class="full-height full-width flex flex-center"
              style="background-color: rgba(114, 119, 131) !important"
            ></div>
          </q-carousel-slide>
        </q-carousel>
        <!-- intro buttons -->
        <div class="row">
          <div
            class="col-md-3 col-lg-3 col-xs-12 col-sm-12"
            @click="scrollToElement('statistic_id')"
          >
            <q-card
              class="bg-columbusBrand text-white q-pa-sm flex flex-center text-center box-shadow"
              style="margin: 40px; height: 30vh"
            >
              <div>
                <q-icon size="110px" name="ballot" :style="'color:'" />
                <div class="text-h6 georgia">Statistika</div>
              </div>
            </q-card>
          </div>

          <div
            class="col-md-3 col-lg-3 col-xs-12 col-sm-12"
            @click="scrollToElement('id_sveikatos_istorija')"
          >
            <q-card
              class="bg-columbusBrand text-white q-pa-sm flex flex-center text-center box-shadow"
              style="margin: 40px; height: 30vh"
            >
              <div>
                <q-icon size="110px" name="library_books" :style="'color:'" />
                <div class="text-h6 georgia">Sveikatos istorija</div>
              </div>
            </q-card>
          </div>

          <div
            class="col-md-3 col-lg-3 col-xs-12 col-sm-12"
            @click="scrollToElement('id_informacija')"
          >
            <q-card
              class="bg-columbusBrand text-white q-pa-sm flex flex-center text-center box-shadow"
              style="margin: 40px; height: 30vh"
            >
              <div>
                <q-icon size="110px" name="view_comfy" :style="'color:'" />
                <div class="text-h6 georgia">Informacija</div>
              </div>
            </q-card>
          </div>

          <div
            class="col-md-3 col-lg-3 col-xs-12 col-sm-12"
            @click="scrollToElement('id_contact_us')"
          >
            <q-card
              class="bg-columbusBrand text-white q-pa-sm flex flex-center text-center box-shadow"
              style="margin: 40px; height: 30vh"
            >
              <div>
                <q-icon size="110px" name="people" :style="'color:'" />
                <div class="text-h6 georgia">Palikti žinutę treneriams</div>
              </div>
            </q-card>
          </div>
        </div>
        <!-- apex chart divas -->
        <div class="q-pa-md" id="statistic_id" style="background: #fafafc">
          <q-card flat bordered>
            <q-card-section align="center">
              <div class="text-h3 text-prussianBlue georgia">
                apex chart bloko divas
              </div>
            </q-card-section>
            <q-separator color="orange" inset />
            <q-card-section horizontal>
              <div
                style="
                  width: 100vw;
                  max-width: 100vw;
                  height: 600px;
                  max-height: 80vw;
                "
              >
                <apexchart
                  height="100%"
                  type="donut"
                  :options="chartOptions"
                  :series="series"
                >
                </apexchart>
              </div>
              <q-separator vertical color="orange" size="2px" />

              <q-table
                style="
                  width: 100vw;
                  max-width: 100vw;
                  height: 600px;
                  max-height: 80vw;
                "
                :data="myLicenseData"
                :columns="myLicenseColumns"
                :separator="separator"
                row-key="id"
                binary-state-sort
              >
                <template v-slot:header="props">
                  <q-tr :props="props">
                    <q-th
                      v-for="col in props.cols"
                      :key="col.name"
                      :props="props"
                      class="georgia"
                    >
                      {{ col.label }}
                    </q-th>
                  </q-tr>
                </template>

                <template v-slot:body="props">
                  <q-tr :props="props">
                    <q-td key="name" :props="props">
                      <q-btn
                        flat
                        color="dark"
                        class="georgia text-stormDark"
                        @click="saveLicenseID(props.row.id)"
                        >{{ props.row.name }}</q-btn
                      >
                      <q-dialog v-model="myLincenseCard">
                        <q-card
                          class="my-card"
                          style="
                            width: 700px;
                            max-width: 80vw;
                            height: 600px;
                            max-height: 80vw;
                          "
                        >
                          <q-img
                            :src="myLicenseData[index].image"
                            style="height: 120px; max-width: 700px"
                          />
                          <q-card-section class="columbus">
                            <div
                              class="text-pre-wrap text-h4 georgia text-prussianBlue"
                            >
                              {{ myLicenseData[licenseIndex].name }}
                            </div>
                          </q-card-section>
                          <q-separator />
                          <q-card-section
                            style="width: 100vw; max-width: 39vw"
                            class="columbus"
                          >
                            <span style="white-space: pre-line">
                              <div
                                class="text-pre-wrap text-h6 georgia text-stormDark"
                              >
                                {{ myLicenseData[licenseIndex].description }}
                              </div>
                            </span>
                          </q-card-section>
                        </q-card>
                      </q-dialog>
                    </q-td>
                    <q-td key="platform" :props="props">
                      <div class="text-pre-wrap georgia text-stormDark">
                        {{ props.row.platform }}
                      </div>
                    </q-td>
                    <q-td key="aquisition" :props="props">
                      <div class="text-pre-wrap georgia text-stormDark">
                        {{ props.row.aquisition }}
                      </div>
                    </q-td>
                  </q-tr>
                </template>
              </q-table>
            </q-card-section>
          </q-card>
        </div>

        <!--Sprendimu biblioteka-->
        <div class="q-pa-md" style="background: #f3f2f5">
          <q-table
            title="Biblioteka"
            :data="data"
            :columns="columns"
            row-key="id"
            binary-state-sort
            :filter="filter"
            :filter-method="myfilterMethod"
            id="id_sveikatos_istorija"
          >
            <template v-slot:top>
              <div class="q-pa-md">
                <div class="text-h3 text-prussianBlue georgia q-my-md">
                  Sveikatos istorija
                </div>
              </div>
              <q-space />

              <q-btn-dropdown outline color="primary" label="Traumos tipas">
                <q-list>
                  <q-item tag="label" v-ripple>
                    <q-item-section avatar>
                      <q-checkbox
                        v-for="(option, index) in foptions"
                        :key="index"
                        v-model="option.value"
                        :label="option.label"
                        :color="option.color"
                        :keep-color="option.keepColor"
                        @input="toggleFilter(index, 0)"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>

              <q-btn-dropdown outline color="primary" label="Trukmė">
                <q-list>
                  <q-item tag="label" v-ripple>
                    <q-item-section avatar>
                      <q-checkbox
                        v-for="(option, index) in foptions1"
                        :key="index"
                        v-model="option.value"
                        :label="option.label"
                        :color="option.color"
                        :keep-color="option.keepColor"
                        @input="toggleFilter(index, 1)"
                      />
                    </q-item-section>
                  </q-item>
                </q-list>
              </q-btn-dropdown>
            </template>

            <template v-slot:header="props">
              <q-tr :props="props">
                <q-th
                  v-for="col in props.cols"
                  :key="col.name"
                  :props="props"
                  class="georgia"
                >
                  {{ col.label }}
                </q-th>
              </q-tr>
            </template>

            <template v-slot:body="props">
              <q-tr :props="props">
                <q-td key="name" :props="props">
                  <q-btn
                    flat
                    color="dark"
                    class="georgia text-stormDark"
                    @click="saveID(props.row.id)"
                    >{{ props.row.name }}</q-btn
                  >
                  <q-dialog v-model="card">
                    <q-card
                      class="my-card"
                      style="
                        width: 700px;
                        max-width: 80vw;
                        height: 600px;
                        max-height: 80vw;
                      "
                    >
                      <q-img
                        :src="data[index].image"
                        style="height: 120px; max-width: 700px"
                      />
                      <q-card-section class="columbus">
                        <div
                          class="text-pre-wrap text-h4 georgia text-prussianBlue"
                        >
                          {{ data[index].name }}
                        </div>
                      </q-card-section>
                      <q-separator />
                      <q-card-section horizontal>
                        <q-card-section
                          style="width: 500px; max-width: 35vw"
                          class="columbus"
                        >
                          <span style="white-space: pre-line">
                            <div class="text-pre-wrap calibri text-stormDark">
                              {{ data[index].description }}
                            </div>
                            <br />
                            <div align="left">
                              <q-btn
                                v-if="data[index].button"
                                size="md"
                                color="primary"
                                type="a"
                                :href="data[index].buttonLink"
                                target="_blank"
                                class="georgia"
                                label="Plačiau"
                              />
                              <!-- <q-btn v-if="data[index].button" color="primary" style="height: 4vh;width: 20vw" type="a" :href="data[index].buttonLink" target="_blank" class="georgia" label="Plačiau"/> -->
                            </div>
                          </span>
                        </q-card-section>

                        <q-separator vertical />

                        <q-card-section>
                          <div
                            class="text-pre-wrap georgia text-h6 text-stormDark"
                          >
                            Kaina: {{ data[index].prices }}
                          </div>
                        </q-card-section>
                      </q-card-section>
                      <q-separator />
                      <q-card-actions align="center">
                        <q-btn
                          v-close-popup
                          bordered
                          color="primary"
                          class="georgia"
                          @click="download(index)"
                          >Atsisiųsti PDF</q-btn
                        >
                      </q-card-actions>
                      <br />
                      <q-card-section v-if="data[index].video" class="wrapper">
                        <iframe
                          id="libraryFrame"
                          width="480"
                          height="315"
                          :src="data[index].videoLink"
                          style="padding: 15px"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </q-card-section>

                      <q-card-section
                        v-if="data[index].extraVideos"
                        class="wrapper"
                      >
                        <iframe
                          id="libraryFrame"
                          width="480"
                          height="315"
                          src="https://www.youtube.com/embed/TWYpOnKZiiw"
                          style="padding: 15px"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </q-card-section>

                      <q-card-section
                        v-if="data[index].extraVideos"
                        class="wrapper"
                      >
                        <iframe
                          id="libraryFrame"
                          width="480"
                          height="315"
                          src="https://www.youtube.com/embed/2IIERi5EjcY"
                          style="padding: 15px"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </q-card-section>

                      <q-card-section
                        v-if="data[index].extraVideos"
                        class="wrapper"
                      >
                        <iframe
                          id="libraryFrame"
                          width="480"
                          height="315"
                          src="https://www.youtube.com/embed/n19iNw3No58"
                          style="padding: 15px"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </q-card-section>

                      <q-card-section
                        v-if="data[index].extraVideos"
                        class="wrapper"
                      >
                        <iframe
                          id="libraryFrame"
                          width="480"
                          height="315"
                          src="https://www.youtube.com/embed/_rZLWHQsBWU"
                          style="padding: 15px"
                          title="YouTube video player"
                          frameborder="0"
                          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                          allowfullscreen
                        ></iframe>
                      </q-card-section>
                    </q-card>
                  </q-dialog>
                </q-td>
                <q-td key="platform" :props="props">
                  <div class="text-pre-wrap calibri text-stormDark">
                    {{ props.row.platform }}
                  </div>
                </q-td>
                <q-td key="segment" :props="props">
                  <div class="text-pre-wrap calibri text-stormDark">
                    {{ props.row.segment }}
                  </div>
                </q-td>
                <q-td key="aquisition" :props="props">
                  <div class="text-pre-wrap calibri text-stormDark">
                    {{ props.row.aquisition }}
                  </div>
                </q-td>
              </q-tr>
            </template>
          </q-table>
        </div>

        <!-- Help desk new -->

        <div class="q-pa-md row justify-center q-gutter-md">
          <div style="background: #f7f7f7" id="id_informacija">
            <div class="row">
              <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-center georgia text-prussianBlue">
                  Informacija
                  <br />
                  <span class="text-center text-grey text-h6 calibri"
                    >Ką norėtumėte atlikti:</span
                  >
                </h5>
              </div>
            </div>
            <div class="q-pa-xl">
              <div class="row q-col-gutter-sm">
                <!-- derinių knyga card -->

                <div
                  class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
                  @click="deriniai = true"
                >
                  <q-item class="box-shadow q-pa-none q-ml-xs">
                    <q-item-section
                      side
                      :style="'background-color:' + theme_color"
                      class="q-pa-sm q-mr-none text-white"
                    >
                      <q-icon name="compare_arrows" size="65px"></q-icon>
                    </q-item-section>
                    <q-item-section class="q-pa-md q-ml-none">
                      <q-item-label
                        class="text-h6 text-prussianBlue text-uppercase georgia text-"
                        >Derinių knyga</q-item-label
                      >
                      <q-item-label class="text-grey-8 calibri"
                        >Visi komandos deriniai</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </div>

                <!-- derinių knyga dialog -->

                <q-dialog v-model="deriniai">
                  <q-card
                    class="my-card"
                    style="
                      width: 600px;
                      max-width: 90vw;
                      height: 400px;
                      max-height: 80vw;
                    "
                  >
                    <q-card-section class="bg-columbusBrand">
                      <h4
                        class="text-h5 georgia text-white q-my-md"
                        align="center"
                      >
                        Komandos deriniai
                      </h4>
                    </q-card-section>
                    <q-list highlight separator>
                      <q-input v-model="search" filled type="search" hint="">
                        <template v-slot:append>
                          <q-icon name="search" />
                        </template>
                      </q-input>
                      <q-item
                        v-for="search in filteredSearches"
                        :key="search.id"
                        class="q-my-sm calibri text-stormDark"
                        clickable
                        v-ripple
                        tag="a"
                        target="_blank"
                        :href="search.link"
                        ><q-item-section>
                          <q-item-label>{{ search.title }}</q-item-label>
                        </q-item-section>
                      </q-item>
                    </q-list>
                  </q-card>
                </q-dialog>

                <!-- Register problem card -->

                <div
                  class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
                  @click="registerProblemcard = true"
                >
                  <q-item class="box-shadow q-pa-none q-ml-xs">
                    <q-item-section
                      side
                      :style="'background-color:' + theme_color"
                      class="q-pa-sm q-mr-none text-white"
                    >
                      <q-icon size="65px">
                        <img
                          src="~assets/consulting1.png"
                          style="max-height: 65px; max-width: 65px"
                        />
                      </q-icon>
                    </q-item-section>
                    <q-item-section class="q-pa-md q-ml-none">
                      <q-item-label
                        class="text-h6 text-prussianBlue text-uppercase georgia"
                        >Incidentų registracija</q-item-label
                      >
                      <q-item-label class="text-grey-8 calibri"
                        >Registruoti užklausą</q-item-label
                      >
                    </q-item-section>
                  </q-item>

                  <!-- Register problem dialog -->

                  <q-dialog v-model="registerProblemcard">
                    <q-card
                      class="my-card"
                      style="
                        width: 1200px;
                        max-width: 90vw;
                        height: 700px;
                        max-height: 80vw;
                      "
                    >
                      <q-card-section class="bg-columbusBrand">
                        <h4
                          class="text-h5 text-white georgia q-my-md"
                          align="center"
                        >
                          Registruoti incidentą
                        </h4>
                      </q-card-section>

                      <q-card-section>
                        <q-input v-model="nameInput">
                          <template v-slot:before>
                            <div
                              class="text-prussianBlue georgia"
                              style="width: 10vw"
                            >
                              Vardas Pavardė:
                            </div>
                          </template>
                        </q-input>
                      </q-card-section>

                      <q-card-section>
                        <q-select
                          filled
                          v-model="selectCategory"
                          :options="categories"
                          label="Pasirinkite..."
                          style="calibri"
                        >
                          <template v-slot:before>
                            <div
                              class="text-prussianBlue georgia"
                              style="width: 10vw"
                            >
                              Kategorija:
                            </div>
                          </template>
                        </q-select>
                      </q-card-section>

                      <q-card-section>
                        <q-select
                          filled
                          v-model="selectRepetition"
                          :options="intervals"
                          label="Pasirinkite..."
                          style="calibri"
                        >
                          <template v-slot:before>
                            <div
                              class="text-prussianBlue georgia"
                              style="width: 10vw"
                            >
                              Pasikartojimas:
                            </div>
                          </template>
                        </q-select>
                      </q-card-section>

                      <q-card-section>
                        <q-select
                          filled
                          v-model="selectImportance"
                          :options="importance"
                          label="Pasirinkite..."
                          style="calibri"
                        >
                          <template v-slot:before>
                            <div
                              class="text-prussianBlue georgia"
                              style="width: 10vw"
                            >
                              Svarba:
                            </div>
                          </template>
                        </q-select>
                      </q-card-section>

                      <q-card-section>
                        <q-select
                          filled
                          v-model="selectPriority"
                          :options="priotity"
                          label="Pasirinkite..."
                          style="calibri"
                        >
                          <template v-slot:before>
                            <div
                              class="text-prussianBlue georgia"
                              style="width: 10vw"
                            >
                              Prioritetas:
                            </div>
                          </template>
                        </q-select>
                      </q-card-section>

                      <q-card-section horizontal>
                        <div
                          class="q-pa-md text-h5 text-prussianBlue georgia"
                          style="width: 14vw"
                        >
                          Pasrinkite produktą:
                        </div>

                        <q-card-section>
                          <q-select
                            filled
                            v-model="selectProduct"
                            :options="product"
                            label="Pasirinkite..."
                            style="calibri; width: 55vw;"
                          >
                          </q-select>
                          <div style="width: 300px">
                            <q-expansion-item
                              default-closed
                              switch-toggle-side
                              label="ARBA užpildykite čia"
                            >
                              <q-separator />
                              <q-card>
                                <q-card-section style="width: 55vw">
                                  <q-input v-model="platformInput">
                                    <template v-slot:before>
                                      <div
                                        class="text-h6 text-stormDark calibri"
                                        style="width: 10vw"
                                      >
                                        Platforma:
                                      </div>
                                    </template>
                                  </q-input>

                                  <q-input v-model="productInput">
                                    <template v-slot:before>
                                      <div
                                        class="text-h6 text-stormDark calibri"
                                        style="width: 10vw"
                                      >
                                        Produktas:
                                      </div>
                                    </template>
                                  </q-input>

                                  <q-input v-model="versionInput">
                                    <template v-slot:before>
                                      <div
                                        class="text-h6 text-stormDark calibri"
                                        style="width: 10vw"
                                      >
                                        Produkto versija:
                                      </div>
                                    </template>
                                  </q-input>
                                </q-card-section>
                              </q-card>
                            </q-expansion-item>
                          </div>
                        </q-card-section>
                      </q-card-section>

                      <q-card-section>
                        <q-input v-model="myIncidentDescription">
                          <template v-slot:before>
                            <div
                              class="text-prussianBlue georgia"
                              style="width: 10vw"
                            >
                              Santrauka:
                            </div>
                          </template>
                        </q-input>
                      </q-card-section>

                      <q-card-section>
                        <h6
                          class="text-h5 text-prussianBlue q-my-md georgia"
                          align="left"
                        >
                          Apibūdinkite problemą:
                        </h6>
                        <div
                          class="q-pa-md"
                          style="
                            width: 1170px;
                            max-width: 85vw;
                            height: 200px;
                            max-height: 80vw;
                          "
                        >
                          <q-input
                            v-model="problemText"
                            filled
                            type="textarea"
                          />
                        </div>
                      </q-card-section>
                      <q-card-section>
                        <div
                          class="q-pa-md"
                          style="
                            width: 1155px;
                            max-width: 65vw;
                            height: 150px;
                            max-height: 20vh;
                          "
                        >
                          <q-uploader
                            style="
                              width: 1155px;
                              max-width: 65vw;
                              height: 150px;
                              max-height: 20vh;
                            "
                            url="http://localhost:8080/upload"
                            field-name="file"
                            :headers="[
                              { name: 'Authorization', value: bearerToken },
                            ]"
                            class="georgia"
                            label="Maksimalus failo dydis (20MB)"
                            multiple
                            max-file-size="167772160 "
                            @rejected="onRejected"
                            @finish="finished"
                            ref="uploader"
                          />
                        </div>
                      </q-card-section>
                      <q-card-section align="center">
                        <q-btn
                          flat
                          color="white"
                          style="
                            width: 1000px;
                            max-width: 20vw;
                            height: 50px;
                            max-height: 20vh;
                          "
                          class="bg-primary georgia"
                          @click="upload()"
                          >Registruoti</q-btn
                        >
                      </q-card-section>
                    </q-card>
                    <q-dialog v-model="succesfullyRegisteredIncidentCard">
                      <q-card>
                        <q-card-section>
                          <div class="text-primary georgia" style="width: 10vw">
                            Jūsų incidentas sėkmingai registruotas
                          </div>
                        </q-card-section>
                      </q-card>
                    </q-dialog>
                  </q-dialog>
                </div>

                <!-- Rungtynių peržiūra card -->
                <div
                  class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
                  @click="RungtyniųPeržiūra = true"
                >
                  <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
                    <q-item-section
                      side
                      :style="'background-color:' + theme_color"
                      class="q-pa-sm q-mr-none text-white"
                    >
                      <q-icon name="search" size="65px"></q-icon>
                    </q-item-section>
                    <q-item-section class="q-pa-md q-ml-none">
                      <q-item-label
                        class="text-h6 text-prussianBlue text-uppercase georgia"
                        >Rungtynių peržiūra</q-item-label
                      >
                      <q-item-label class="text-grey-8 calibri"
                        >Rungtynių peržiūra siekiant nebedaryti
                        klaidų</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </div>

                <!-- Rungtynių peržiūra dialog -->
                <q-dialog v-model="RungtyniųPeržiūra">
                  <q-card
                    style="
                      width: 1200px;
                      max-width: 63vw;
                      height: 700px;
                      max-height: 80vw;
                    "
                  >
                    <q-card-section class="bg-columbusBrand">
                      <h4 class="text-h5 text-white q-my-md" align="center">
                        Rungtynių peržiūra
                      </h4>
                    </q-card-section>

                    <q-card-section
                      class="q-pt-none"
                      style="
                        width: 1200px;
                        max-width: 70vw;
                        height: 700px;
                        max-height: 80vh;
                      "
                    >
                      <div class="q-pa-md" style="max-width: 62vw">
                        <div class="row q-col-gutter-sm q-pa-md">
                          <div class="col">
                            <q-card>
                              <q-card-section class="wrapper">
                                <iframe
                                  width="560"
                                  height="315"
                                  src="https://www.youtube.com/embed/DlhaO-3DzpQ"
                                  style="padding: 15px"
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                ></iframe>
                              </q-card-section>
                              <q-separator color="orange" inset />
                              <q-card-section>
                                <div class="text-h5 georgia text-prussianBlue">
                                  „Kidy Tour“ KMT finalo rungtynės: „Žalgiris“ -
                                  „Rytas“
                                </div>
                              </q-card-section>
                              <q-card-section>
                                <div
                                  class="text-subtitle1 text-stormDark calibri"
                                >
                                  2019 m. Kidy Tour Karaliaus Mindaugo taurės
                                  turnyro finalo rungtynės: Kauno Žalgiris –
                                  Vilniaus Rytas.
                                </div>
                              </q-card-section>
                            </q-card>
                          </div>

                          <div class="col">
                            <q-card>
                              <q-card-section class="wrapper">
                                <iframe
                                  width="560"
                                  height="315"
                                  src="https://www.youtube.com/embed/WZIAGU1CaDk"
                                  style="padding: 15px"
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                ></iframe>
                              </q-card-section>
                              <q-separator color="orange" inset />
                              <q-card-section>
                                <div class="text-h5 georgia text-prussianBlue">
                                  „Kidy Tour“ KMT pusfinalio rungtynės: „Rytas“
                                  - „Neptūnas“
                                </div>
                              </q-card-section>
                              <q-card-section>
                                <div
                                  class="text-subtitle1 text-stormDark calibri"
                                >
                                  2019 m. Kidy Tour Karaliaus Mindaugo taurės
                                  turnyro pusfinalio rungtynės: Vilniaus Rytas -
                                  Klaipėdos Neptūnas.
                                </div>
                              </q-card-section>
                            </q-card>
                          </div>
                        </div>

                        <div class="row q-col-gutter-sm q-pa-md">
                          <div class="col">
                            <q-card>
                              <q-card-section class="wrapper">
                                <iframe
                                  width="560"
                                  height="315"
                                  src="https://www.youtube.com/embed/m8UEOLVA7hg"
                                  style="padding: 15px"
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                ></iframe>
                              </q-card-section>
                              <q-separator color="orange" inset />
                              <q-card-section>
                                <div class="text-h5 georgia text-prussianBlue">
                                  Lenovo Tenerife vs Rytas Vilnius | Basketball
                                  Champions League
                                </div>
                              </q-card-section>
                              <q-card-section>
                                <div
                                  class="text-subtitle1 text-stormDark calibri"
                                >
                                  2021-2022 m. FIBA kepšinio čempionų lygos
                                  trečiosios aštuntfinalio rungtynės tarp
                                  „Lenovo Tenerife“ ir Vilniaus „Rytas“.
                                </div>
                              </q-card-section>
                            </q-card>
                          </div>

                          <div class="col">
                            <q-card>
                              <q-card-section class="wrapper">
                                <iframe
                                  width="560"
                                  height="315"
                                  src="https://www.youtube.com/embed/B8UoXO1KZTY"
                                  style="padding: 15px"
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                ></iframe>
                              </q-card-section>
                              <q-separator color="orange" inset />
                              <q-card-section>
                                <div class="text-h5 georgia text-prussianBlue">
                                  Rytas Vilnius vs SIG Strasbourg | Basketball
                                  Champions League
                                </div>
                              </q-card-section>
                              <q-card-section>
                                <div
                                  class="text-subtitle1 text-stormDark calibri"
                                >
                                  2021-22 m. FIBA krepšinio čempionų lygos
                                  pirmosios aštuntfinalio rungtynės tarp
                                  Vilniaus „Ryto“ ir „SIG Strasbourg“.
                                </div>
                              </q-card-section>
                            </q-card>
                          </div>
                        </div>

                        <div class="row q-col-gutter-sm">
                          <div class="col">
                            <q-card>
                              <q-card-section class="wrapper">
                                <iframe
                                  width="560"
                                  height="315"
                                  src="https://www.youtube.com/embed/P5oOA31dOPY"
                                  style="padding: 15px"
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                ></iframe>
                              </q-card-section>
                              <q-separator color="orange" inset />
                              <q-card-section>
                                <div class="text-h5 georgia text-prussianBlue">
                                  Rytas Vilnius vs Besiktas Icrypex | Basketball
                                  Champions League
                                </div>
                              </q-card-section>
                              <q-card-section>
                                <div
                                  class="text-subtitle1 text-stormDark calibri"
                                >
                                  2021-2022 m. FIBA krepšinio čempionų lygos
                                  4-osios žaidimo dienos rungtynės tarp Vilniaus
                                  „Ryto“ ir „Besiktas Icrypex“.
                                </div>
                              </q-card-section>
                            </q-card>
                          </div>

                          <div class="col">
                            <q-card>
                              <q-card-section class="wrapper">
                                <iframe
                                  width="560"
                                  height="315"
                                  src="https://www.youtube.com/embed/7wYV8nw4Vd4"
                                  style="padding: 15px"
                                  title="YouTube video player"
                                  frameborder="0"
                                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                  allowfullscreen
                                ></iframe>
                              </q-card-section>
                              <q-separator color="orange" inset />
                              <q-card-section>
                                <div class="text-h5 georgia text-prussianBlue">
                                  Rytas Vilnius vs EWE Baskets Oldenburg |
                                  Basketball Champions League
                                </div>
                              </q-card-section>
                              <q-card-section>
                                <div
                                  class="text-subtitle1 text-stormDark calibri"
                                >
                                  2021-22 m. FIBA krepšinio čempionų lygos
                                  5-osios žaidimo dienos rungtynės tarp Vilniaus
                                  „Ryto“ ir „EWE Baskets Oldenburg“.
                                </div>
                              </q-card-section>
                            </q-card>
                          </div>
                        </div>
                      </div>
                    </q-card-section>
                  </q-card>
                </q-dialog>
              </div>
              <!-- Incidents card -->
              <div class="row q-col-gutter-sm q-mt-lg">
                <div
                  class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
                  @click="myIncidents = true"
                >
                  <q-item class="box-shadow q-pa-none q-ml-xs">
                    <q-item-section
                      side
                      :style="'background-color:' + theme_color"
                      class="q-pa-sm q-mr-none text-white"
                    >
                      <q-icon name="settings" size="65px"></q-icon>
                    </q-item-section>
                    <q-item-section class="q-pa-md q-ml-none">
                      <q-item-label
                        class="text-h6 text-prussianBlue text-uppercase georgia"
                        >Mano incidentai</q-item-label
                      >
                      <q-item-label class="text-grey-8 calibri"
                        >Incidentų apžvalga</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </div>

                <!-- Incidents dialog -->
                <q-dialog v-model="myIncidents">
                  <q-card
                    style="
                      width: 1200px;
                      max-width: 63vw;
                      height: 500px;
                      max-height: 80vw;
                    "
                  >
                    <q-card-section class="bg-columbusBrand">
                      <h4 class="text-h5 text-white q-my-md" align="center">
                        Incidentai
                      </h4>
                    </q-card-section>
                    <q-card-section class="q-pt-none">
                      <q-table
                        table-header-class="bg-columbusBrand text-white georgia"
                        title=""
                        :data="MyIncidentsData"
                        :columns="MyIncidentsColumns"
                        row-key="name"
                      />
                    </q-card-section>
                  </q-card>
                </q-dialog>

                <!-- Statistika card -->
                <div
                  class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
                  @click="projectsCard = true"
                >
                  <q-item class="box-shadow q-pa-none q-ml-xs">
                    <q-item-section
                      side
                      :style="'background-color:' + theme_color"
                      class="q-pa-sm q-mr-none text-white"
                    >
                      <q-icon size="65px">
                        <img
                          src="~assets/briefing.png"
                          style="max-height: 65px; max-width: 65px"
                        />
                      </q-icon>
                    </q-item-section>
                    <q-item-section class="q-pa-md q-ml-none">
                      <q-item-label
                        class="text-h6 text-prussianBlue text-uppercase georgia"
                        >Žaidėjų statistika</q-item-label
                      >
                      <q-item-label class="text-grey-8 calibri"
                        >Statistikos apžvalga</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </div>

                <!-- Statistika dialog -->
                <q-dialog v-model="projectsCard">
                  <q-card style="width: 1300px; max-width: 1300vw">
                    <q-card-section class="bg-columbusBrand">
                      <h4 class="text-h5 text-white q-my-md" align="center">
                        Statistika
                      </h4>
                    </q-card-section>
                    <div class="q-pa-md">
                      <q-option-group
                        v-model="separator"
                        inline
                        class="q-mb-md"
                      />
                      <q-table
                        color="primary"
                        card-class="bg-white-6 text-black"
                        table-class="text-grey-8"
                        table-header-class="bg-columbusBrand text-white"
                        :data="statistikaData"
                        :columns="StatistikaCollumns"
                        row-key="name"
                        :separator="separator"
                      >
                      </q-table>
                    </div>
                  </q-card>
                </q-dialog>
                <!-- Varžovų individualių analizė -->
                <div
                  class="col-md-4 col-lg-4 col-sm-12 col-xs-12"
                  @click="varžovųAnalizė = true"
                >
                  <q-item class="box-shadow q-pa-none q-ml-xs q-mr-xs">
                    <q-item-section
                      side
                      :style="'background-color:' + theme_color"
                      class="q-pa-sm q-mr-none text-white"
                    >
                      <q-icon name="lightbulb" size="65px"></q-icon>
                    </q-item-section>
                    <q-item-section class="q-pa-md q-ml-none">
                      <q-item-label
                        class="text-h6 text-prussianBlue text-uppercase georgia"
                        >Varžovų analizė</q-item-label
                      >
                      <q-item-label class="text-grey-8 calibri"
                        >Individualių žaidėjų analizė</q-item-label
                      >
                    </q-item-section>
                  </q-item>
                </div>
              </div>

              <!-- varžovų individualių analizė dialog -->
              <q-dialog v-model="varžovųAnalizė">
                <q-card
                  style="
                    width: 1200px;
                    max-width: 63vw;
                    height: 700px;
                    max-height: 80vw;
                  "
                >
                  <q-card-section class="bg-columbusBrand">
                    <h4
                      class="text-h5 georgia text-white q-my-md"
                      align="center"
                    >
                      Individualių žaidėjų analizė
                    </h4>
                  </q-card-section>

                  <q-card-section
                    class="q-pt-none"
                    style="
                      width: 1200px;
                      max-width: 70vw;
                      height: 700px;
                      max-height: 80vh;
                    "
                  >
                    <div class="q-pa-md" style="max-width: 62vw">
                      <div class="row q-col-gutter-sm q-pa-md">
                        <div class="col">
                          <q-card style="height: 66vh">
                            <q-card-section class="wrapper">
                              <iframe
                                width="480"
                                height="315"
                                src="https://www.youtube.com/embed/qrXtg9elamA"
                                style="padding: 15px"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </q-card-section>
                            <q-separator color="orange" inset />
                            <q-card-section>
                              <div class="text-h5 georgia text-prussianBlue">
                                Nikola Mirotič
                              </div>
                            </q-card-section>
                            <q-card-section>
                              <div
                                class="text-subtitle1 text-stormDark calibri"
                              >
                                Šiame video žvilgsnis į Nikola Mirotičiaus
                                istoriją. Priežastys, dėl kurių juodkalnietis
                                atsisakė įspūdingo kontrakto NBA ir pasirinko
                                žaidimą Europoje bei jo MVP sezono analizė.
                                Išskirtinis universalumas sunkiojo puolėjo
                                pozicijoje, Šaro deriniai jam bei tokio tipo
                                žaidėjams nebūdingų dalykų darymas aikštelėje.
                              </div>
                            </q-card-section>
                          </q-card>
                        </div>

                        <div class="col">
                          <q-card style="height: 66vh">
                            <q-card-section class="wrapper">
                              <iframe
                                width="480"
                                height="315"
                                src="https://www.youtube.com/embed/lb99p6vQxVg"
                                style="padding: 15px"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </q-card-section>
                            <q-separator color="orange" inset />
                            <q-card-section>
                              <div class="text-h5 georgia text-prussianBlue">
                                Mike James
                              </div>
                            </q-card-section>
                            <q-card-section>
                              <div
                                class="text-subtitle1 text-stormDark calibri"
                              >
                                Kviečiame žiūrėti išsamią Maskvos CSKA lyderio
                                ir vieno naudingiausių Eurolygos žaidėjų analizę
                                – stipriausios pusės 2 prieš 2 žaidime bei
                                mėgstamiausi judesiai ir tendencijos atakuojant
                                individualiai. Jūsų laukia pavyzdžiai iš įvairių
                                rungtynių bei komentarai apie D. Itoudžio
                                amerikiečiui sukuriamas situacijas atakuoti.
                              </div>
                            </q-card-section>
                          </q-card>
                        </div>
                      </div>

                      <div class="row q-col-gutter-sm q-pa-md">
                        <div class="col">
                          <q-card>
                            <q-card-section class="wrapper">
                              <iframe
                                width="480"
                                height="315"
                                src="https://www.youtube.com/embed/wkDm9S2puqc"
                                style="padding: 15px"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </q-card-section>
                            <q-separator color="orange" inset />
                            <q-card-section>
                              <div class="text-h5 georgia text-prussianBlue">
                                Shavon Shields
                              </div>
                            </q-card-section>
                            <q-card-section>
                              <div
                                class="text-subtitle1 text-stormDark calibri"
                              >
                                Priežastys, nulėmusios puikų pirmąjį jo sezoną
                                su „Olimpia Milano“, kai jie pateko į Eurolygos
                                finalo ketvertą, dėl ko Shieldsas yra taškų
                                darymo mašina ir kaip jis suteikia įdomų
                                pranašumą Ettore'o Messinos "switch-all" gynybos
                                sistemai.
                              </div>
                            </q-card-section>
                          </q-card>
                        </div>

                        <div class="col">
                          <q-card>
                            <q-card-section class="wrapper">
                              <iframe
                                width="480"
                                height="315"
                                src="https://www.youtube.com/embed/SYWhq6SQOQQ"
                                style="padding: 15px"
                                title="YouTube video player"
                                frameborder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowfullscreen
                              ></iframe>
                            </q-card-section>
                            <q-separator color="orange" inset />
                            <q-card-section>
                              <div class="text-h5 georgia text-prussianBlue">
                                Wade Baldwin IV
                              </div>
                            </q-card-section>
                            <q-card-section>
                              <div
                                class="text-subtitle1 text-stormDark calibri"
                              >
                                Wade Baldwin IV ir jo istorija: kaip per vieną
                                sezoną 5,5 taško rinkęs Eurolygos naujokas tapo
                                vienu iš sunkiausiai sustabdomų Eurolygos
                                žaidėju.
                              </div>
                            </q-card-section>
                          </q-card>
                        </div>
                      </div>
                    </div>
                  </q-card-section>
                </q-card>
              </q-dialog>
            </div>
          </div>
        </div>

        <!-- žinutė treneriams -->
        <div class="q-pa-md row justify-center q-gutter-md" id="id_contact_us">
          <div
            style="background: #0e3a5e; width: 100vw; max-width: 100vw"
            id="help-desk"
          >
            <div class="row">
              <div class="col-md-12 col-lg-12 col-xs-12 col-sm-12">
                <h5 class="text-center text-white georgia">
                  Palikite žinutę treneriams
                </h5>
              </div>
            </div>

            <div class="row text-center flex flex-center q-pb-lg">
              <div
                class="col-md-6 col-lg-6 col-sx-12 col-sm-12 q-gutter-lg q-px-xl q-pb-none q-ma-none"
              >
                <q-input
                  square
                  clearable
                  v-model="yourMessage"
                  type="textarea"
                  bg-color="white"
                  outlined
                  label="Žinutė *"
                  class="georgia"
                ></q-input>
              </div>
            </div>

            <div class="row flex flex-center text-center q-pb-xl q-mt-md">
              <div class="col-md-12 col-lg-12 col-sx-12 col-sm-12">
                <q-btn
                  flat
                  size="lg"
                  color="white"
                  class="bg-primary georgia"
                  style="
                    width: 1000px;
                    max-width: 20vw;
                    height: 50px;
                    max-height: 20vh;
                  "
                  @click="contactUs()"
                  label="Siųsti žinutę"
                />
              </div>
            </div>
          </div>
        </div>
      </q-page>
    </q-page-container>
  </q-layout>
</template>

<script>
import { scroll } from "quasar";
const { getScrollTarget, setScrollPosition } = scroll;
import ApexCharts from "apexcharts";

// derinių knyga skiltis

const searches = [
  {
    id: 0,
    title: "Clock Zone Offense",
    link: "https://hooptactics.net/premium/offense/zoneoffense/clock.php",
  },
  {
    id: 0,
    title: '"Stack" Zone Offense',
    link: "https://hooptactics.net/premium/offense/zoneoffense/blue.php",
  },
  {
    id: 0,
    title: "High/Low Zone Offense",
    link: "https://hooptactics.net/premium/offense/zoneoffense/hilozone.php",
  },
  {
    id: 0,
    title: "Boston Zone Offense",
    link: "https://hooptactics.net/premium/offense/zoneoffense/iowa.php",
  },
  {
    id: 0,
    title: "1-4 Slice Zone Offense",
    link: "https://hooptactics.net/premium/offense/zoneoffense/slice.php",
  },
  {
    id: 0,
    title: "Power Offense",
    link: "https://hooptactics.net/premium/offense/setoffense/power.php",
  },
  {
    id: 0,
    title: "High Post Split Offense",
    link: "https://hooptactics.net/premium/offense/setoffense/highpostsplit.php",
  },
  {
    id: 0,
    title: "Zipper Offense",
    link: "https://hooptactics.net/premium/offense/setoffense/zipper.php",
  },
  {
    id: 0,
    title: "Up Shadow",
    link: "https://hooptactics.net/premium/defense/fullcourtpress/sosshadowup.php",
  },
  {
    id: 0,
    title: "Side Screen Screen/Roll Disruptions",
    link: "https://hooptactics.net/premium/defense/sosdefense/sossidescreendisruptions.php",
  },
  {
    id: 0,
    title: "Attacking On-Ball Screens",
    link: "https://hooptactics.net/premium/defense/disruptivepressure/defscreensonball.php",
  },
];

//statistika
const statistikaData = [
  {
    name: "Margiris Normantas",
    MP: 34,
    Min: "21:35",
    Dvitaškiai: "1,8/3,6 (50,4%)",
    Tritaškiai: "1,5/4,5 (32,7%)",
    FT: "1,0/1,3 (77,3%)",
    REB: "2,5",
    AS: "2,8",
    TO: "1,4",
    ST: "1,3",
    PTS: 9.1,
    EFF: 8.6,
  },
  {
    name: "Reigarvius Williams",
    MP: 17,
    Min: "21:06",
    Dvitaškiai: "3,8/6,8 (55,7%)",
    Tritaškiai: "0,4/0,7 (50,0%)",
    FT: "2,1/2,8 (75,0%)",
    REB: "5,7",
    AS: "0,8",
    TO: "0,9",
    ST: "0,9",
    PTS: 10.7,
    EFF: 13.2,
  },
  {
    name: "Arnas Adomavičius",
    MP: 20,
    Min: "05:16",
    Dvitaškiai: "0,3/0,5 (55,6%)",
    Tritaškiai: "0,4/1,3 (32,0%)",
    FT: "0,0/0,0 (0,0%)",
    REB: "0,5",
    AS: "0,3",
    TO: "0,2",
    ST: "0,1",
    PTS: 1.7,
    EFF: 0.7,
  },
  {
    name: "Gytis Radzevičius",
    MP: 35,
    Min: "25:11",
    Dvitaškiai: "2,2/3,8 (58,2%)",
    Tritaškiai: "0,9/2,4 (37,6%)",
    FT: "1,2/1,5 (80,8%)",
    REB: "6,7",
    AS: "1,5",
    TO: "0,8",
    ST: "0,7",
    PTS: 8.4,
    EFF: 8.2,
  },
  {
    name: "Vaidas Kariniauskas",
    MP: 29,
    Min: "18:41",
    Dvitaškiai: "2,4/4,2 (56,9%)",
    Tritaškiai: "0,9/2,1 (41,0%)",
    FT: "0,8/1,2 (66,7%)",
    REB: "1,7",
    AS: "3,7",
    TO: "2,1",
    ST: "0,8",
    PTS: 8.2,
    EFF: 8.2,
  },
  {
    name: "Lukas Uleckas",
    MP: 35,
    Min: "16:31",
    Dvitaškiai: "1,0/1,6 (61,4%)",
    Tritaškiai: "1,2/3,0 (39,6%)",
    FT: "0,9/1,3 (71,1%)",
    REB: "2,2",
    AS: "1,2",
    TO: "0,7",
    ST: "0,5",
    PTS: 6.5,
    EFF: 6.3,
  },
  {
    name: "Mindaugas Girdžiūnas",
    MP: 32,
    Min: "21:51",
    Dvitaškiai: "1,7/3,2 (52,5%)",
    Tritaškiai: "1,3/3,8 (35,2%)",
    FT: "1,9/2,1 (92,4%)",
    REB: "1,1",
    AS: "2,2",
    TO: "0,9",
    ST: "0,5",
    PTS: 9.3,
    EFF: 8.6,
  },
  {
    name: "Tanner Leissner",
    MP: 29,
    Min: "21:31",
    Dvitaškiai: "2,2/3,5 (64,4%)",
    Tritaškiai: "1,0/2,7 (36,7%)",
    FT: "1,6/2,1 (76,7%)",
    REB: "3,7",
    AS: "0,9",
    TO: "0,5",
    ST: "0,5",
    PTS: 9.1,
    EFF: 10.2,
  },
  {
    name: "Ivan Buva",
    MP: 30,
    Min: "22:14",
    Dvitaškiai: "5,6/9,1 (61,3%)",
    Tritaškiai: "0,7/1,5 (48,9%)",
    FT: "3,9/4,9 (79,7%)",
    REB: "6,0",
    AS: "1,0",
    TO: "1,7",
    ST: "0,4",
    PTS: 17.3,
    EFF: 19.8,
  },
  {
    name: "Adas Šimonis",
    MP: 7,
    Min: "03:10",
    Dvitaškiai: "0,1/0,4 (33,3%)",
    Tritaškiai: "0,0/0,3 (0,0%)",
    FT: "0,0/0,0 (0,0%)",
    REB: "0,0",
    AS: "0,0",
    TO: "0,0",
    ST: "0,0",
    PTS: 0.3,
    EFF: -0.9,
  },
  {
    name: "Evaldas Kairys",
    MP: 11,
    Min: "09:47",
    Dvitaškiai: "1,4/2,0 (68,2%)",
    Tritaškiai: "0,0/0,0 (0,0%)",
    FT: "1,5/2,0 (72,7%)",
    REB: "1,8",
    AS: "0,2",
    TO: "0,6",
    ST: "0,5",
    PTS: 4.2,
    EFF: 4.3,
  },
  {
    name: "Kenneth Smith",
    MP: 33,
    Min: "24:39",
    Dvitaškiai: "1,9/4,0 (48,1%)",
    Tritaškiai: "1,7/4,3 (39,4%)",
    FT: "1,7/2,0 (82,1%)",
    REB: "2,5",
    AS: "5,6",
    TO: "2,2",
    ST: "1,0",
    PTS: 10.6,
    EFF: 11.9,
  },
  {
    name: "Arnas Butkevičius",
    MP: 34,
    Min: "24:11",
    Dvitaškiai: "1,6/2,9 (56,7%)",
    Tritaškiai: "1,0/2,4 (40,7%)",
    FT: "1,9/2,5 (78,6%)",
    REB: "4,7",
    AS: "2,2",
    TO: "0,9",
    ST: "1,3",
    PTS: 8.1,
    EFF: 12.9,
  },
];
//lentelė prie apexchart
const myLicenseData = [
  {
    id: 0,
    name: "IFRS16",
    platform: "Microsoft Dynamics NAV",
    segment: "Gamyba",
    aquisition: "Nuomojama",
    image:
      "https://f.hubspotusercontent30.net/hub/494838/hubfs/photo-1537024278396-c5dacc9beea7_CC.jpg?width=1600&name=photo-1537024278396-c5dacc9beea7_CC.jpg",
    description:
      "Columbus IFRS16 sprendimas yra įgyvendintas naudojant standartines šių Microsoft modulių funkcijas:\n\
                        ‐ Finansų Valdymas\n\
                        – Didžioji Knyga\n\
                        ‐ Ilgalaikis Turtas\n\
                        ‐ Pirkimai ir Mokėtinos sumos",
    prices: "300 Eur/h",
    download: "IFRS16 sprendimas.pdf",
    video: false,
    videoLink: "https://www.youtube.com/embed/zh-YIguUp40",
  },
  {
    id: 1,
    name: "Columbus Leasing",
    platform: "Microsoft Dynamics NAV",
    segment: "Prekyba",
    aquisition: "Įgyta",
    image:
      "https://f.hubspotusercontent30.net/hub/494838/hubfs/the-light-trails-on-the-modern-building-PS2KSTP.jpg?width=1600&name=the-light-trails-on-the-modern-building-PS2KSTP.jpg",
    description:
      "Columbus Leasing is a specialized solution for leasing companies, which enables to manage every aspect of the main lease loan processes,\
                        starting with a quotation, up to the expiration of leasing/loan contract.\n\n\
                        This scalable and dynamic solution helps leasing companies to manage leasing/loan and similar financial products’ contracts and obligations.\
                        It includes a significant number of features and enhancements that are required by finance companies to support leasing/loan contract’s\
                        lifecycle process.\n\n\
                        The solution is based on Microsoft Dynamics NAV and tightly integrated with the general ledger,\
                        sales & purchase, fixed assets, and other Microsoft Dynamics NAV modules",
    prices: "250 Eur/h",
    download: "ColumbusLeasing_Factsheet.pdf",
    video: false,
    videoLink: "https://www.youtube.com/embed/zh-YIguUp40",
  },
  {
    id: 2,
    name: "Power BI app",
    platform: "Microsoft Dynamics NAV",
    segment: "Maisto pramonė",
    aquisition: "Nuomojama",
    image:
      "https://f.hubspotusercontent30.net/hub/494838/hubfs/Gamybos%20Power%20BI.jpg?length=1600&name=Gamybos%20Power%20BI.jpg",
    description:
      "STEP 1: go to Columbus page;\n\
                        STEP 2: choose the dashboard you want to view\
                        by clicking on one of the pictures:\n\
                        Sales (Pardavimų direktorius);\n\
                        Purchases (Komercijos vadovas);\n\
                        Inventory (Atsargų valdytojas);\n\
                        Finance (Finansų kontrolierė).\n\
                        STEP 3: in opened window click on any figure/bar\
                        for live interaction.",
    prices: "250 Eur/h",
    download: "Columbus LT Apps on PowerBI.pdf",
    video: true,
    videoLink: "https://www.youtube.com/embed/zh-YIguUp40",
  },
  {
    id: 3,
    name: "Columbus BDAR",
    platform: "Microsoft Dynamics AX",
    segment: "Prekyba",
    aquisition: "Įgyta",
    image:
      "https://f.hubspotusercontent30.net/hub/494838/hubfs/Gamybos%20Power%20BI.jpg?length=1600&name=Gamybos%20Power%20BI.jpg",
    description:
      "STEP 1: go to Columbus page;\n\
                        STEP 2: choose the dashboard you want to view\
                        by clicking on one of the pictures:\n\
                        Sales (Pardavimų direktorius);\n\
                        Purchases (Komercijos vadovas);\n\
                        Inventory (Atsargų valdytojas);\n\
                        Finance (Finansų kontrolierė).\n\
                        STEP 3: in opened window click on any figure/bar\
                        for live interaction.",
    prices: "250 Eur/h",
    download: "Columbus LT Apps on PowerBI.pdf",
    video: true,
    videoLink: "https://www.youtube.com/embed/zh-YIguUp40",
  },
  {
    id: 4,
    name: "Columbus eXtendo",
    platform: "Microsoft Dynamics AX",
    segment: "Prekyba",
    aquisition: "Įgyta",
    image:
      "https://f.hubspotusercontent30.net/hub/494838/hubfs/Gamybos%20Power%20BI.jpg?length=1600&name=Gamybos%20Power%20BI.jpg",
    description:
      "STEP 1: go to Columbus page;\n\
                        STEP 2: choose the dashboard you want to view\
                        by clicking on one of the pictures:\n\
                        Sales (Pardavimų direktorius);\n\
                        Purchases (Komercijos vadovas);\n\
                        Inventory (Atsargų valdytojas);\n\
                        Finance (Finansų kontrolierė).\n\
                        STEP 3: in opened window click on any figure/bar\
                        for live interaction.",
    prices: "250 Eur/h",
    download: "Columbus LT Apps on PowerBI.pdf",
    video: false,
    videoLink: "https://www.youtube.com/embed/zh-YIguUp40",
  },
  {
    id: 5,
    name: "Siemens Preactor",
    platform: "D365 Business Central",
    segment: "Maisto pramonė",
    aquisition: "Nuomojama",
    image:
      "https://f.hubspotusercontent30.net/hub/494838/hubfs/Gamybos%20Power%20BI.jpg?length=1600&name=Gamybos%20Power%20BI.jpg",
    description:
      "STEP 1: go to Columbus page;\n\
                        STEP 2: choose the dashboard you want to view\
                        by clicking on one of the pictures:\n\
                        Sales (Pardavimų direktorius);\n\
                        Purchases (Komercijos vadovas);\n\
                        Inventory (Atsargų valdytojas);\n\
                        Finance (Finansų kontrolierė).\n\
                        STEP 3: in opened window click on any figure/bar\
                        for live interaction.",
    prices: "250 Eur/h",
    download: "Columbus LT Apps on PowerBI.pdf",
    video: false,
    videoLink: "https://www.youtube.com/embed/zh-YIguUp40",
  },
  {
    id: 6,
    name: "Columbus Payroll",
    platform: "D365 Finance & Operations",
    segment: "Gamyba",
    aquisition: "Įgyta",
    image:
      "https://f.hubspotusercontent30.net/hub/494838/hubfs/Gamybos%20Power%20BI.jpg?length=1600&name=Gamybos%20Power%20BI.jpg",
    description:
      "STEP 1: go to Columbus page;\n\
                        STEP 2: choose the dashboard you want to view\
                        by clicking on one of the pictures:\n\
                        Sales (Pardavimų direktorius);\n\
                        Purchases (Komercijos vadovas);\n\
                        Inventory (Atsargų valdytojas);\n\
                        Finance (Finansų kontrolierė).\n\
                        STEP 3: in opened window click on any figure/bar\
                        for live interaction.",
    prices: "250 Eur/h",
    download: "Columbus LT Apps on PowerBI.pdf",
    video: false,
    videoLink: "https://www.youtube.com/embed/zh-YIguUp40",
  },
];

// table prie sprendimu biblioteka
const tableData = [
  {
    id: 0,
    name: "Margiris Normantas",
    platform: "Čiurnos trauma",
    segment: "<2sav",
    aquisition: "Nuoma",
    image:
      "https://f.hubspotusercontent30.net/hub/494838/hubfs/photo-1537024278396-c5dacc9beea7_CC.jpg?width=1600&name=photo-1537024278396-c5dacc9beea7_CC.jpg",
    description:
      "Columbus IFRS16 sprendimas užtikrina technines priemones šio standarto įgyvendinimui.",
    prices: "300 Eur/h",
    download: "IFRS16 sprendimas.pdf",
    video: false,
    extraVideos: false,
    videoLink: "https://www.youtube.com/embed/zh-YIguUp40",
    button: false,
    buttonLink: "",
  },
  {
    id: 1,
    name: "Evaldas Kairys",
    platform: "Peties trauma",
    segment: "<1sav",
    aquisition: "Nuoma",
    image:
      "https://f.hubspotusercontent30.net/hub/494838/hubfs/the-light-trails-on-the-modern-building-PS2KSTP.jpg?width=1600&name=the-light-trails-on-the-modern-building-PS2KSTP.jpg",
    description:
      "Columbus Leasing is a specialized solution for leasing companies, which enables to manage every aspect of the main lease loan processes,\
                        starting with a quotation, up to the expiration of leasing/loan contract.\n\n\
                        This scalable and dynamic solution helps leasing companies to manage leasing/loan and similar financial products’ contracts and obligations.\
                        It includes a significant number of features and enhancements that are required by finance companies to support leasing/loan contract’s\
                        lifecycle process.\n\n\
                        The solution is based on Microsoft Dynamics NAV and tightly integrated with the general ledger,\
                        sales & purchase, fixed assets, and other Microsoft Dynamics NAV modules",
    prices: "250 Eur/h",
    download: "ColumbusLeasing_Factsheet.pdf",
    video: false,
    extraVideos: false,
    videoLink: "https://www.youtube.com/embed/zh-YIguUp40",
    button: false,
    buttonLink: "",
  },
  {
    id: 2,
    name: "Vaidas Kariniauskas",
    platform: "Riešo lūžis",
    segment: ">1mėn",
    aquisition: "Nuoma",
    image:
      "https://f.hubspotusercontent30.net/hub/494838/hubfs/Gamybos%20Power%20BI.jpg?length=1600&name=Gamybos%20Power%20BI.jpg",
    description:
      "Columbus Power BI sprendimai, pateikiantys standartizuotus ataskaitų (dashboards) paketus finansų, pirkimų, pardavimų, gamybos sritims.",
    prices: "250 Eur/h",
    download: "Columbus LT Apps on PowerBI.pdf",
    video: true,
    extraVideos: true,
    videoLink: "https://www.youtube.com/embed/zh-YIguUp40",
    button: true,
    buttonLink:
      "https://pages.columbusglobal.com/lt/columbus-power-bi-analitikos-sprendimas?hsCtaTracking=cdd9e574-c91d-451e-ae0d-779cbca939e5%7C00535f88-7509-4fa1-8b88-834f053f5bb2 ",
  },
];

const dataCopy = tableData;

//filtravimas
function arrayRemove(arr, value) {
  return arr.filter(function (ele) {
    return ele != value;
  });
}

function arrayRemovePlatform(arr, value) {
  return arr.filter(function (ele) {
    return ele.platform == value;
  });
}

function arrayRemoveSegment(arr, value) {
  return arr.filter(function (ele) {
    return ele.segment == value;
  });
}

function arrayRemoveAquisition(arr, value) {
  return arr.filter(function (ele) {
    return ele.aquisition == value;
  });
}

var a = [],
  b = [],
  prev;

export default {
  computed: {
    series: function () {
      myLicenseData.sort((a, b) => (a.color > b.color ? 1 : -1));

      for (var i = 0; i < myLicenseData.length; i++) {
        if (myLicenseData[i].platform !== prev) {
          a.push(myLicenseData[i].platform);
          b.push(1);
        } else {
          b[b.length - 1]++;
        }
        prev = myLicenseData[i].platform;
      }

      return b;
    },
    bearerToken: function () {
      console.log(this.$store.state.userAccount.token.token);
      return "Bearer " + this.$store.state.userAccount.token.token;
    },
    filteredSearches: function () {
      return this.searches.filter((object) => {
        return object.title.toLowerCase().match(this.search.toLowerCase());
      });
    },
  },

  data() {
    return {
      active: false,
      index: 0,
      licenseIndex: 0,
      myLincenseCard: false,
      card: false,
      projectsCard: false,
      address: "",
      separator: "cell",
      selected: [],
      slide: 1,
      review_slide: "style",
      selected_tab: "t_0",
      team_slide: 1,
      data: tableData,
      statistikaData,
      myLicenseData,
      theme_color: "rgb(255, 146, 4)",

      //contact us variables
      yourName: "",
      yourEmail: "",
      yourPhone: "",
      yourMessage: "",

      // register card variables
      nameInput: "",
      selectCategory: null,
      selectRepetition: null,
      selectImportance: null,
      selectPriority: null,
      selectProduct: null,
      platformInput: "",
      productInput: "",
      versionInput: "",
      myIncidentDescription: "",
      problemText: "",
      // search help variables
      search: "",
      model: null,
      searches,
      deriniai: false,

      // for problem input
      selectPlatform: null,
      attachFile: null,
      categories: ["Visi", "L2B"],
      intervals: [
        "Nuolat",
        "Kartais",
        "Atsitiktinai",
        "Nemėginta",
        "Nepavyksta atkartoti",
        "Neapibrėžta",
      ],
      importance: [
        "Nauja galimybė",
        "Triviali",
        "Klaida tekste",
        "Patobulinimas",
        "Maža",
        "Didelė",
        "Programos lūžimas",
        "Blokuoja programą",
      ],
      priotity: ["Neapibrėžtas", "Žemas", "Vidutinis", "Aukštas", "Skubus"],
      product: [
        "Microsoft Dynamics AX 2009",
        "Microsoft Dynamics AX 2012",
        "Microsoft Dynamics D365  F&amp;O OnPremise",
        "Microsoft Dynamics NAV 2009",
        "Microsoft Dynamics NAV 2013",
        "Microsoft Dynamics NAV 2013 R2",
        "Microsoft Dynamics NAV 2015",
        "Microsoft Dynamics NAV 2016",
        "Microsoft Dynamics NAV 2017",
        "Microsoft Dynamics NAV 2018",
        "Microsoft Dynamics NAV 365 BC Cloud",
        "Microsoft Dynamics NAV 365 BC OnPremice",
        "Microsoft Dynamics NAV 4.0",
        "Microsoft Dynamics NAV 5.0",
        "Microsoft Dynamics Navision 3.6",
        "Microsoft Dynamics nežinoma versija",
      ],
      registerProblemcard: false,
      succesfullyRegisteredIncidentCard: false,
      RungtyniųPeržiūra: false,
      myIncidents: false,
      varžovųAnalizė: false,

      //sprendimu biblioteka filtru mygtukai
      foptions: [
        {
          label: "Riešo lūžis",
          value: false,
          color: "primary",
          keepColor: true,
        },
        {
          label: "Čiurnos trauma",
          value: false,
          color: "primary",
          keepColor: true,
        },
        {
          label: "Peties trauma",
          value: false,
          color: "primary",
          keepColor: true,
        },
      ],
      foptions1: [
        {
          label: "<1sav",
          value: false,
          color: "primary",
          keepColor: true,
        },
        {
          label: "<2sav",
          value: false,
          color: "primary",
          keepColor: true,
        },
        {
          label: ">1mėn",
          value: false,
          color: "primary",
          keepColor: true,
        },
      ],
      columns: [
        {
          name: "name",
          required: true,
          label: "Žaidėjas",
          align: "left",
          field: (row) => row.name,
          sortable: true,
        },
        {
          name: "platform",
          label: "Traumos tipas",
          align: "left",
          field: "platform",
          sortable: true,
        },
        {
          name: "segment",
          label: "Trukmė",
          align: "left",
          field: "segment",
          sortable: true,
        },
      ],

      myLicenseColumns: [
        {
          name: "name",
          required: true,
          label: "Licencijos",
          align: "left",
          field: (row) => row.name,
          sortable: true,
        },
        {
          name: "platform",
          label: "Platforma",
          align: "left",
          field: "platform",
          sortable: true,
        },
        {
          name: "aquisition",
          label: "Įsigijimas",
          align: "left",
          field: "aquisition",
          sortable: true,
        },
      ],
      //mano projektai lentelė
      StatistikaCollumns: [
        {
          name: "desc",
          required: true,
          label: "Žaidėjas",
          align: "left",
          field: (row) => row.name,
          format: (val) => `${val}`,
          sortable: true,
          headerClasses: "bg-primary text-white georgia-bold",
        },
        {
          name: "MP",
          align: "center",
          label: "MP",
          field: "MP",
          sortable: true,
          headerClasses: "bg-primary text-white georgia-bold",
        },
        {
          name: "Min",
          align: "center",
          label: "Min",
          field: "Min",
          sortable: true,
          headerClasses: "bg-primary text-white georgia-bold",
        },
        {
          name: "Dvitaškiai",
          align: "center",
          label: "2P",
          field: "Dvitaškiai",
          sortable: true,
          headerClasses: "bg-primary text-white georgia-bold",
        },
        {
          name: "Tritaškiai",
          align: "center",
          label: "3P",
          field: "Tritaškiai",
          sortable: true,
          headerClasses: "bg-primary text-white georgia-bold",
        },
        {
          name: "FT",
          align: "center",
          label: "FT",
          field: "FT",
          sortable: true,
          headerClasses: "bg-primary text-white georgia-bold",
        },
        {
          name: "REB",
          align: "center",
          label: "REB",
          field: "REB",
          sortable: true,
          headerClasses: "bg-primary text-white georgia-bold",
        },
        {
          name: "AS",
          align: "center",
          label: "AS",
          field: "AS",
          sortable: true,
          headerClasses: "bg-primary text-white georgia-bold",
        },
        {
          name: "TO",
          align: "center",
          label: "TO",
          field: "TO",
          sortable: true,
          headerClasses: "bg-primary text-white georgia-bold",
        },
        {
          name: "ST",
          align: "center",
          label: "ST",
          field: "ST",
          sortable: true,
          headerClasses: "bg-primary text-white georgia-bold",
        },
        {
          name: "PTS",
          align: "center",
          label: "PTS",
          field: "PTS",
          sortable: true,
          headerClasses: "bg-primary text-white georgia-bold",
        },
        {
          name: "EFF",
          align: "center",
          label: "EFF",
          field: "EFF",
          sortable: true,
          headerClasses: "bg-primary text-white georgia-bold",
        },
      ],
      //mano incidentai stulpeliai
      MyIncidentsColumns: [
        {
          name: "id",
          align: "left",
          label: "Incidento numeris",
          field: "id",
          sortable: true,
        },
        {
          name: "incidentName",
          required: true,
          label: "Incidentas",
          align: "left",
          field: "incidentName",
          sortable: true,
        },
        {
          name: "user",
          align: "left",
          label: "Vardas",
          field: "userName",
          sortable: true,
        },
        {
          name: "type",
          align: "left",
          label: "Užklausos tipas",
          field: "type",
          sortable: true,
        },
        {
          name: "status",
          align: "left",
          label: "Statusas",
          field: "Prioritets",
          sortable: true,
        },
        {
          name: "platform",
          align: "left",
          label: "Plaftorma",
          field: "platform",
          sortable: true,
        },
        {
          name: "date",
          align: "left",
          label: "Data",
          field: "date",
          sortable: true,
        },
        {
          name: "state",
          align: "left",
          label: "Būsena",
          field: "state",
          sortable: true,
        },
      ],
      // mano incidentai duomenys
      MyIncidentsData: [
        {
          id: 1,
          incidentName: "Indidentas nr. 1",
          userName: "Petras Petraitis",
          type: "Incidentas",
          status: "Aukšta",
          platform: "Microsoft NAV 15",
          date: "2020-04-15",
          state: "Išspręstas",
        },
        {
          id: 2,
          incidentName: "Indidentas nr.2",
          userName: "Petras Petraitis",
          type: "Incidentas",
          status: "Žema",
          platform: "Microsoft NAV 2.0",
          date: "2021-03-12",
          state: "Išspręstas",
        },
      ],
      //sprendimu biblioteka  buttons
      val: true,
      filter: { platform: [], segment: [], aquisition: [] },
      pagination: {
        sortBy: "name",
        descending: false,
        rowsPerPage: 50,
      },
      paginationLicense: {
        sortBy: "name",
        descending: false,
        rowsPerPage: 10,
      },

      // chart variables
      chartOptions: {
        legend: {
          position: "bottom",
        },

        colors: ["#ff9204", "#163147", "#26A69A", "#064578"],

        animations: {
          enabled: true,
          easing: "easeinout",
          speed: 1000,
        },
        chart: {
          toolbar: {
            show: true,
          },
        },
        labels: a,
        responsive: [
          {
            breakpoint: 480,
            options: {
              chart: {
                width: 250,
              },
            },
          },
        ],
      },
    };
  },

  methods: {
    saveID(id) {
      this.card = true;
      this.index = id;
    },
    saveLicenseID(id) {
      this.myLincenseCard = true;
      this.licenseIndex = id;
    },

    SetVideoUrl(index) {
      document
        .getElementById("libraryFrame")
        .setAttribute("src", this.data[id].videoLink);
    },

    download(id) {
      // console.log(this.$store.state.userAccount.token.token)

      axiosInstance.post(
        "/downloadLog",
        {
          log: this.data[id].download,
          jwt: this.$store.state.userAccount.token.token,
        },
        {
          headers: {
            Authorization:
              "Bearer " + this.$store.state.userAccount.token.token,
          },
        }
      );

      axios({
        url: "http://localhost:8080/downloads/" + this.data[id].download,
        method: "GET",
        responseType: "blob",
      }).then((response) => {
        var fileUrl = window.URL.createObjectURL(new Blob([response.data]));
        var fileLink = document.createElement("a");
        fileLink.href = fileUrl;

        fileLink.setAttribute("download", this.data[id].download);
        document.body.appendChild(fileLink);
        fileLink.click();
      });
    },

    toggleFilter(index, filterSegment) {
      if (filterSegment == 0) {
        if (this.foptions[index].value) {
          this.filter.platform.push(this.foptions[index].label);
          // console.log(this.filter.platform)
        } else {
          this.filter.platform = arrayRemove(
            this.filter.platform,
            this.foptions[index].label
          );
          // console.log(this.filter.platform)
        }
      } else if (filterSegment == 1) {
        if (this.foptions1[index].value) {
          this.filter.segment.push(this.foptions1[index].label);
          // console.log(this.filter.segment)
        } else {
          this.filter.segment = arrayRemove(
            this.filter.segment,
            this.foptions1[index].label
          );
          // console.log(this.filter.segment)
        }
      } else {
        if (this.foptions2[index].value) {
          this.filter.aquisition.push(this.foptions2[index].label);
          // console.log(this.filter.aquisition)
        } else {
          this.filter.aquisition = arrayRemove(
            this.filter.aquisition,
            this.foptions2[index].label
          );
          // console.log(this.filter.aquisition)
        }
      }
    },
    scrollToElement(id) {
      let el = document.getElementById(id);
      const target = getScrollTarget(el);
      const offset = el.offsetTop + 3;
      const duration = 900;
      setScrollPosition(target, offset, duration);
    },
    //incidentu registracija pridėti faila
    upload() {
      this.$refs.uploader.upload();
      var id = this.MyIncidentsData[this.MyIncidentsData.length - 1].id + 1;
      let today = new Date().toISOString().slice(0, 10);
      // console.log(this.myIncidentDescription)
      let incident = {
        id: id,
        incidentName: this.myIncidentDescription,
        userName: this.nameInput,
        type: "Incidentas",
        status: this.selectPriority,
        platform: "",
        date: today,
        state: "Registruota",
      };

      if (this.selectProduct == null) {
        var temp =
          this.platformInput +
          " " +
          this.productInput +
          " " +
          this.versionInput;
        incident.platform = temp;
      } else {
        incident.platform = this.selectProduct;
      }

      this.nameInput = "";
      this.selectCategory = null;
      this.selectRepetition = null;
      this.selectImportance = null;
      this.selectPriority = null;
      this.selectProduct = null;
      this.platformInput = "";
      this.productInput = "";
      this.versionInput = "";
      this.myIncidentDescription = "";
      this.problemText = "";
      this.succesfullyRegisteredIncidentCard = true;
      // this.$refs.uploader.reset()
      // console.log(id);
      this.MyIncidentsData.push(incident);
    },

    finished() {
      this.$refs.uploader.reset();
    },

    resetFilter() {
      this.foptions.forEach((option) => (option.value = false));
      console.log(this.filter.value);
      this.filter.value = "none";
      console.log(this.filter.value);
    },

    hoverOver: function (index) {
      this["about_heading_color_" + index] = this.theme_color;
      this["about_heading_" + index] = ["animated", "bounceIn"];
    },

    myfilterMethod() {
      var i;
      var copy = dataCopy;
      var result = dataCopy;
      var temp;

      for (i = 0; i < this.filter.platform.length; i++) {
        copy = dataCopy;
        // console.log(this.filter.value[i])
        copy = arrayRemovePlatform(copy, this.filter.platform[i]);
        // console.log(copy)
        if (i == 0) {
          result = copy;
        } else {
          for (var j = 0; j < copy.length; j++) {
            result.push(copy[j]);
          }
        }
      }
      temp = result;
      for (i = 0; i < this.filter.segment.length; i++) {
        copy = temp;
        // console.log(this.filter.value[i])
        copy = arrayRemoveSegment(copy, this.filter.segment[i]);
        // console.log(copy)
        if (i == 0) {
          result = copy;
        } else {
          for (var j = 0; j < copy.length; j++) {
            result.push(copy[j]);
          }
        }
      }

      temp = result;
      for (i = 0; i < this.filter.aquisition.length; i++) {
        copy = temp;
        // console.log(this.filter.value[i])
        copy = arrayRemoveAquisition(copy, this.filter.aquisition[i]);
        // console.log(copy)
        if (i == 0) {
          result = copy;
        } else {
          for (var j = 0; j < copy.length; j++) {
            result.push(copy[j]);
          }
        }
      }
      // this.data.filter((person) => this.filter.value.includes(person.name))
      // this.data = this.data.filter(item => !this.filter.value.includes(item));
      // console.log(this.filter.value)
      // console.log(this.data)
      //  console.log(copy)

      return result;
    },
    contactUs() {
      this.yourName = "";
      this.yourEmail = "";
      this.yourPhone = "";
      this.yourMessage = "";
    },
    onRejected(rejectedEntries) {
      // Notify plugin needs to be installed
      // https://quasar.dev/quasar-plugins/notify#Installation
      this.$q.notify({
        type: "negative",
        message: `${rejectedEntries.length} file(s) did not pass validation constraints`,
      });
    },
  },
};
</script>

<style lang="sass" scoped>
.wrapper
  position: relative
  padding-bottom: 56.25%
  padding-top: 25px
  height: 0

.wrapper iframe
  position: absolute
  top: 0
  left: 0
  width: 100%
  height: 100%


.my-button-container
  width: 100%

.my-button
  text-decoration: none
  text-transform: uppercase
  margin: 0 0 20px 0
  text-align: center
  padding: 7px 14px
  background-color: #000
  color: #fff
  text-transform: uppercase
  box-shadow: 0 0 1px #000
  transition-delay: 0.2s

.my-button:hover
  box-shadow: 0 0 5px #000

.box-shadow:hover
  box-shadow: 0 10px 13px -6px rgba(0, 0, 0, 0.2), 0 20px 31px 3px rgba(0, 0, 0, 0.14), 0 8px 38px 7px rgba(0, 0, 0, 0.12) !important
</style>
