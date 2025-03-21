import { Box, Card, CardBody, Center, Text } from '@chakra-ui/react';
import { Stats } from '../../declarations/dao/dao.did';
import { useEffect, useState } from 'react';
import { dao } from '../../declarations/dao';

export default function AboutPage() {
  const [stats, setStats] = useState<Stats | null>(null);

  useEffect(() => {
    async function fetchStats() {
      const stats = await dao.getStats();
      setStats(stats);
    }
    fetchStats();
  }, []);

  return (
    <Box>
      <Center>
        <Card maxW={'2xl'}>
          <CardBody>
            <Text mb={5}>{stats?.manifesto}</Text>
            <Box>
              <Text
                display={'flex'}
                align={'center'}
                justifyContent={'space-between'}
              >
                <span
                  style={{
                    fontWeight: 500,
                  }}
                >
                  Members
                </span>{' '}
                {stats?.numberOfMembers.toString()}
              </Text>
            </Box>
          </CardBody>
        </Card>
      </Center>
    </Box>
  );
}
