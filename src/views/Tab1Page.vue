<script setup lang="ts">
import ExploreContainer from '@/components/ExploreContainer.vue';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/vue';
</script>

<template>
  <IonPage>
    <IonHeader>
      <IonToolbar>
        <IonTitle>Tab 1</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent :fullscreen="true">
      <IonHeader collapse="condense">
        <IonToolbar>
          <IonTitle size="large">
            Tab 1
          </IonTitle>
        </IonToolbar>
      </IonHeader>

      <ExploreContainer name="Tab 1 page" />
    </IonContent>
  </IonPage>
</template>
