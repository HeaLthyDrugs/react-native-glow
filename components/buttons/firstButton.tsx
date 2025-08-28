import AnimatedGlow, { type PresetConfig } from 'react-native-animated-glow';
import { Text, View } from 'react-native';

// Best practice: Define presets in their own file.
export const myCoolPreset: PresetConfig = {
  cornerRadius: 50,
  outlineWidth: 2,
  borderColor: '#E0FFFF',
  backgroundColor: '#6495ED',
  glowLayers: [
    // A soft, classic outer glow
    {
      colors: ['#00BFFF', '#87CEEB'],
      opacity: 0.5,
      glowSize: 30,
      glowPlacement: 'behind',
    },
    // A bright, clipped inner glow
    {
      colors: ['#FFFFFF', '#AFEEEE'],
      glowSize: 15,
      glowPlacement: 'inside',
    }
  ]
};

function FirstButton() {
  return (
    <AnimatedGlow preset={myCoolPreset}>
      <View style={{ padding: 20, backgroundColor: 'transparent' }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>First Button</Text>
      </View>
    </AnimatedGlow>
  );
}

export default FirstButton;