import { MainPageContainer } from '../../../styles/global';
import { BuyServerButton, PageHeader, ServersHeader, ServersMainContent } from './styled';
import TrafficTable from '../../../ui/components/lists/traffic-table';
import SearchComponent from '../../../ui/components/common/input/search';

export default function ServersPage() {
  return (
    <MainPageContainer>
      <PageHeader>
        <h3>
          <strong>Servers</strong>
        </h3>
        <h6>January 1-30, 2023</h6>
      </PageHeader>
      <ServersMainContent>
        <ServersHeader>
          <SearchComponent />
          <BuyServerButton className='button-secondary'>Buy Server</BuyServerButton>
        </ServersHeader>
        <TrafficTable isminimized={false} />
      </ServersMainContent>
    </MainPageContainer>
  );
}
