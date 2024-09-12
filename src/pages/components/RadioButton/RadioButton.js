import * as React from 'react';
import { View, Text, style} from 'react-native';
import { RadioButton } from 'react-native-paper';
import styles from "./styles";
const RadioComponent = () => {
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.questoes}>
      <View style={styles.alternativas}>
        <RadioButton
          value="first"
          status={checked === 'first' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('first')}
        />
        <Text>25 semanas.</Text>
      </View>
      <View style={styles.alternativas}>
      <RadioButton
        value="second"
        status={checked === 'second' ? 'checked' : 'unchecked'}
        onPress={() => setChecked('second')}
      />
        <Text>1 semana.</Text>
      </View>

      <View style={styles.alternativas}>
        <RadioButton
          value="third"
          status={checked === 'third' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('third')}
        />
        <Text>2,5 semanas.</Text>
      </View>

      <View style={styles.alternativas}>
        <RadioButton
          value="fourth"
          status={checked === 'fourth' ? 'checked' : 'unchecked'}
          onPress={() => setChecked('fourth')}
        />
        <Text>10 semanas.</Text>
      </View>
    </View>
  );
};

export default RadioComponent;