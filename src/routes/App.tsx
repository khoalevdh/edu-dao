import {
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  Icon,
  IconProps,
} from '@chakra-ui/react';

const Illustration = (props: IconProps) => {
  return (
    <Icon
      width="100%"
      viewBox="0 0 702 448"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <rect width="702" height="448" rx="20" fill="#F8FAFC" />
      <path
        d="M150 250C180 200 260 180 320 200C380 220 450 300 500 310C550 320 600 280 620 260"
        stroke="#FFA500"
        strokeWidth="8"
        strokeLinecap="round"
      />
      <circle cx="200" cy="150" r="40" fill="#FFA500" />
      <circle cx="320" cy="180" r="35" fill="#FF7043" />
      <circle cx="450" cy="280" r="45" fill="#34D399" />
      <circle cx="580" cy="260" r="38" fill="#60A5FA" />
      <rect x="180" y="320" width="340" height="40" rx="10" fill="#E5E7EB" />
      <text x="190" y="348" fill="#374151" fontSize="18" fontWeight="bold">
        Collaborate | Learn | Innovate
      </text>
    </Icon>
  );
};

export default function CallToActionWithIllustration() {
  return (
    <Stack
      textAlign={'center'}
      align={'center'}
      spacing={{ base: 8, md: 10 }}
      py={{ base: 20, md: 28 }}
    >
      <Heading
        fontWeight={600}
        fontSize={{ base: '3xl', sm: '4xl', md: '6xl' }}
        lineHeight={'110%'}
      >
        Join a Community of{' '}
        <Text as={'span'} color={'orange.400'}>
          Passionate Developers
        </Text>
      </Heading>
      <Text color={'gray.500'} maxW={'3xl'}>
        Learn, build, and grow with a supportive group of software engineers.
        Participate in discussions, work on real-world projects, and push the
        boundaries of your skills. Collaboration, mentorship, and continuous
        learning start here.
      </Text>
      <Stack spacing={6} direction={'row'}>
        <Button
          rounded={'full'}
          px={6}
          colorScheme={'orange'}
          bg={'orange.400'}
          _hover={{ bg: 'orange.500' }}
        >
          Get Involved
        </Button>
        <Button rounded={'full'} px={6}>
          Learn More
        </Button>
      </Stack>
      <Flex w={'full'}>
        <Illustration
          height={{ sm: '24rem', lg: '28rem' }}
          mt={{ base: 12, sm: 16 }}
        />
      </Flex>
    </Stack>
  );
}
