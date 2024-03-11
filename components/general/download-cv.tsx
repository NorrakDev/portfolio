'use client';

import Button from '@/components/general/button';

const DownloadCV = () => {
  return (
    <Button onClick={() => window?.open('/files/norrak-cv-2021.pdf', '_blank')}>
      Download CV
    </Button>
  );
};

export default DownloadCV;
