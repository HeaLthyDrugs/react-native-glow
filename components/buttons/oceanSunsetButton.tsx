import AnimatedGlow, { type PresetConfig } from 'react-native-animated-glow';
import { Text, View } from 'react-native';

// Best practice: Define presets in their own file.
export const oceanSunset: PresetConfig = {
  cornerRadius: 70,
  outlineWidth: 4,
  borderColor: ['rgba(255, 124, 171, 1)', 'rgba(63, 100, 199, 1)', 'rgba(240, 115, 46, 1)'],
  backgroundColor: 'rgba(21, 21, 21, 1)',
  animationSpeed: 2,
  randomness: 0.01,
  borderSpeedMultiplier: 1,
  glowLayers: [
    {
      glowPlacement: 'behind',
      colors: ['#f82fc6', '#5a4ff9', '#ff923e'],
      glowSize: 15,
      opacity: 0.1,
      speedMultiplier: 1,
      coverage: 1,
      relativeOffset: 0
    },
    {
      glowPlacement: 'behind',
      colors: ['rgba(255, 89, 213, 1)', 'rgba(63, 89, 255, 1)', 'rgba(255, 164, 0, 1)'],
      glowSize: 5,
      opacity: 0.5,
      speedMultiplier: 1,
      coverage: 1,
      relativeOffset: 0
    }
  ]
};

function OceanSunsetButton() {
  return (
    <AnimatedGlow preset={oceanSunset}>
      <View style={{ padding: 20, backgroundColor: 'transparent' }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Ocean Sunset Button</Text>
      </View>
    </AnimatedGlow>
  );
}

export default OceanSunsetButton;