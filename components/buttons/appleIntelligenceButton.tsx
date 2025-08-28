import AnimatedGlow, { type PresetConfig } from 'react-native-animated-glow';
import { Text, View } from 'react-native';

// Best practice: Define presets in their own file.
export const appleIntelligence: PresetConfig = {
  cornerRadius: 50,
  outlineWidth: 0,
  borderColor: 'rgba(255, 255, 255, 1)',
  backgroundColor: '#000',
  animationSpeed: 1,
  randomness: 0.01,
  borderSpeedMultiplier: 1,
  glowLayers: [
    {
      glowPlacement: 'inside',
      colors: ['rgba(15, 0, 255, 1)', 'rgba(174, 27, 110, 1)', 'rgba(207, 0, 0, 1)', 'rgba(255, 159, 16, 1)'],
      glowSize: 24,
      opacity: 0.3,
      speedMultiplier: 1,
      coverage: 1,
      relativeOffset: 0
    },
    {
      glowPlacement: 'inside',
      colors: ['rgba(47, 0, 255, 0.54)', 'rgba(174, 27, 124, 1)', 'rgba(207, 0, 0, 1)', 'rgba(255, 164, 53, 1)'],
      glowSize: 6,
      opacity: 0.5,
      speedMultiplier: 1,
      coverage: 1,
      relativeOffset: 0
    },
    {
      glowPlacement: 'inside',
      colors: ['rgba(233, 227, 255, 1)', 'rgba(255, 84, 197, 1)', 'rgba(255, 38, 87, 1)', 'rgba(255, 195, 136, 1)'],
      glowSize: 1,
      opacity: 1,
      speedMultiplier: 1,
      coverage: 1,
      relativeOffset: 0
    },
    {
      glowPlacement: 'inside',
      colors: ['rgba(91, 104, 255, 1)', 'rgba(178, 223, 255, 1)'],
      glowSize: [0, 4, 4, 0],
      opacity: 0.2,
      speedMultiplier: 2,
      coverage: 0.4,
      relativeOffset: 0
    },
    {
      glowPlacement: 'inside',
      colors: ['rgba(255, 255, 255, 1)'],
      glowSize: [0, 2, 0],
      opacity: 0.2,
      speedMultiplier: 2,
      coverage: 0.4,
      relativeOffset: 0
    }
  ]
};

function AppleIntelligenceButton() {
  return (
    <AnimatedGlow preset={appleIntelligence}>
      <View style={{ padding: 20, backgroundColor: 'transparent' }}>
        <Text style={{ color: 'white', fontWeight: 'bold' }}>Apple Intelligence Button</Text>
      </View>
    </AnimatedGlow>
  );
}

export default AppleIntelligenceButton;