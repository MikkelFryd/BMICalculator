import { IonApp, IonButton, IonCard, IonCardContent, IonCol, IonContent, IonGrid, IonHeader, IonIcon, IonInput, IonItem, IonLabel, IonRow, IonTitle, IonToolbar, setupIonicReact } from '@ionic/react';
import { calculatorOutline, refreshCircleOutline } from "ionicons/icons"
import { useRef, useState } from "react"


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => {

  const [ calculatedBMI, setCaculatedBMI ] = useState<number>()

  const heightInputRef = useRef<HTMLIonInputElement>(null)
  const weightInputRef = useRef<HTMLIonInputElement>(null)

  const calculateBMI = () => {
    const enteredHeight = heightInputRef.current!.value
    const enteredWeight = weightInputRef.current!.value

    
    if(!enteredHeight || !enteredWeight) {
      throw new Error("Du skal udfylde begge felter")
    }

    const bmi = +enteredWeight / (+enteredHeight * +enteredHeight)
    setCaculatedBMI(bmi)
  }


  return (
  <IonApp>
    <IonHeader>
      <IonToolbar color='primary'>
        <IonTitle>BMI beregner</IonTitle>
      </IonToolbar>
    </IonHeader>
    <IonContent>
      <IonItem>
        <IonLabel position='floating'>Højde:</IonLabel>
        <IonInput type="number" ref={heightInputRef}></IonInput>
      </IonItem>
      <IonItem>
        <IonLabel position='floating'>Vægt:</IonLabel>
        <IonInput type="number" ref={weightInputRef}></IonInput>
      </IonItem>
      <IonGrid>
        <IonRow>
          <IonCol>
            <IonButton onClick={calculateBMI}>
               <IonIcon slot="start" icon={calculatorOutline}></IonIcon>
              Beregn BMI
              </IonButton>
          </IonCol>
          <IonCol>
            <IonButton>
            <IonIcon slot="start" icon={refreshCircleOutline}></IonIcon>
              Nulstil felter
              </IonButton>
          </IonCol>
        </IonRow>
        {calculatedBMI && (
          <IonRow>
            <IonCol>
              <IonCard>
                <IonCardContent>
                  <h2>Dit BMI er: {calculatedBMI}</h2>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        )}
      </IonGrid>
    </IonContent>
  </IonApp>
)};

export default App;
