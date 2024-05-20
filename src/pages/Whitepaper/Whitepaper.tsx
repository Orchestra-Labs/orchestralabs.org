export const Whitepaper = () => (
  <div className="mt-[104px] mb-0 bg-background-dark-grey">
    <div className="page-container my-0 pt-12.5 md:pt-17.5 xl:pt-25 pb-9 md:pb-14 xl:pb-19 text-body-md text-grey">
      <h1 className="text-white font-semibold text-h2 md:text-h1 xl:text-display2">
        Symphony Whitepaper
      </h1>
      <p className="text-xl md:text-h5 xl:text-h3 mt-10">
        A Solution to Create Stability and Adoption in Crypto
      </p>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          Abstract
        </h2>
        <p className="mt-10 italic">
          While many see the benefits of a price-stable cryptocurrency, due to
          errors in the past, those that construct these cryptocurrencies
          attempt to do so through ever-increasing centralization, which is the
          antithesis to the central tenets of crypto. As a result, despite the
          many failings of centralized systems within the cryptocurrency space
          in 2020, as well as the failures of centralized systems being the
          initial push for the creation of Bitcoin, the cryptocurrency ecosystem
          as a whole still finds itself reliant on such large, centralized
          pillars as Tether and Circle.
        </p>
        <p className="italic mt-5">
          As a solution to this, as well as to the speed-limiting centralization
          within the level ones currently on the market, I propose a new
          cryptocurrency, Symphony, which will provide a stable peg to many
          different currencies as well as a decentralized system at its very
          core that allows for unlimited scalability.
        </p>
      </div>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          1. Introduction
        </h2>
        <p className="mt-10">
          The price-volatility of cryptocurrencies is well-known, and the
          majority of the population would prefer to avoid paying for every-day
          goods and services with a currency that has the potential to double in
          value in a few days, or be paid in a currency if its value can
          significantly decline before the transaction is settled. This problem
          is aggravated when the transaction requires more time, e.g. for
          deferred payments such as mortgages or employment contracts, as
          volatility would severely disadvantage one side of the contract,
          making the use of existing digital currencies in these settings
          prohibitively expensive.
        </p>
        <p className="mt-5">
          At the core of how Symphony solves these issues is the idea that a
          cryptocurrency able to monitor real-world information will be able to
          create a stable price while maintaining decentralization, thus making
          it viable for use as a transaction medium for other cryptocurrencies
          such as Bitcoin. Assuming use as a currency, however, price-stability
          alone is not sufficient. A currency must also have both high speed
          transaction settlements and a large network-effect.
        </p>
        <p className="mt-5">
          To tackle the problem of high speed transaction settlements, sharding,
          which is used by the majority of large businesses within the software
          engineering space, is proposed. Even Google and Amazon, which have the
          money to afford large, powerful computer systems that can handle large
          numbers of transactions, use their money more efficiently by using
          load balancing and sharding techniques to reduce load requirements for
          any particular node in the system. A lighter load for each node allows
          for higher speed settlements as user count rises to the level handled
          by these giants in the software industry.
        </p>
        <p className="mt-5">
          With stability and speed handled, the rest of the work will need to be
          aimed at achieving a large network-effect. This can be done by
          bringing in many developers that can provide a simple, well-designed
          user experience. Any user that’s tried to work with DeFi knows how
          complicated the cryptocurrency space can be. This is prohibitively
          complicated for those only starting to find out about crypto. To that
          end, those that have had to design a good user experience for years in
          their own space should be invited to the crypto space. This can be
          done by not forcing them to learn a new language to engage, but rather
          to make this space able to handle the languages already learned by
          these developers. Those that create easy-to-use user experiences such
          as the developers that worked on Instagram or TikTok know about
          ease-of-use and good design flow. They write their programs in Dart,
          JavaScript, TypeScript, and other, similar languages. Rather than
          making them learn Rust or Solidity, they can apply their current
          knowledge and focus specifically on a good user experience that takes
          all the learning out of crypto so new users can get directly to using
          it, as they want to do.
        </p>
        <p className="mt-5">The rest of the paper is organized as follows:</p>
        <ul className="list-disc mt-5 px-6 md:pl-8">
          <li>Section 2: Stablecoin Policy and Safeguards</li>
          <li>Section 3: Monetary Policy</li>
          <li>Section 4: Sharding</li>
          <li>Section 5: Virtual Machine Layer</li>
          <li>Section 6: Mining</li>
          <li>Section 7: Governance</li>
          <li>Section 8: Rollout</li>
          <li>Section 9: Future Work</li>
        </ul>
        <p className="mt-5">
          Within these sections, references to Symphony will be to the chain,
          Melody will be to each full coin, and Note will be to the smallest
          unit native to Symphony.
        </p>
      </div>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          2. Stablecoin Policy and Safeguards
        </h2>
        <p className="mt-10">
          Any given stablecoin is measured by its ability to have any given unit
          of that stablecoin accurately reflect the value of one unit of
          whichever resource it is pegged to. One USD stablecoin should reflect
          the value of one USD, one GBP stablecoin should reflect the value of
          one GPD, and one BTC stablecoin should accurately reflect one BTC.
          Through this, one might say the general objective of a stablecoin is
          to keep a consistent purchasing power. This may be to ensure value
          stability in times of economic crisis, such as when users sell into
          their local currency to avoid a rapidly falling stock market, or to
          keep the future value of one’s purchasing power secure, such as with
          Bitcoin or gold.
        </p>
        <p className="mt-5">
          The issues many stablecoins face is how to accurately measure the
          value of this external resource as well as how to properly rebalance
          when necessary to reflect this value in the 1:1 relationship
          previously established.
        </p>
        <p className="mt-5">
          This section will specify Symphony’s answers to the above-mentioned
          issues in detail. Within this section and afterwards, references to a
          given stablecoin pair in the symphony ecosystem will be referred to as
          a Harmony. If referencing a stablecoin within the Harmony, it will be
          referred to as a Harmony-Coin. To provide an example, USD would be
          Harmony-USD, or HUSD.
        </p>
        <div className="mt-12">
          <h3 className="text-h6 md:text-h5 xl:text-h3 font-semibold">
            2.1 Measuring the Value of External Resources
          </h3>
          <p className="mt-7.5">
            Recognizing that different users will wish to conduct their
            activities in different trade mediums, Symphony aims to peg to a
            family of trade mediums in an order depending on level of use in the
            world. These will include, but not be limited to, trade mediums such
            as the US dollar, the British Pound, and the Euro. Over time, more
            currencies will be added to the list by user vote.
          </p>
          <p className="mt-5">
            It is important for all Symphony’s Harmonies to have access to
            liquidity from one trade medium into another. For this reason, the
            system will support swaps between harmonized currencies at their
            market exchange rates. Ideally, any user should be able to trade
            HUSD for HGBP at current exchange rates, but failing a system with
            multiple backups for this information, their combined relation to
            Notes will be used, effectively turning Notes into a facilitatory
            trade medium. As the Symphony ecosystem adds more currencies, its
            atomic swap functionality can be an instant solution to
            cross-currency transactions and trade settlements.
          </p>
          <p className="mt-5">
            The manner in which these currencies will be pegged to their
            real-world value will be through the use of Oracle chains, such as
            Chainlink, as well as through a net of relations between the
            currencies currently pegged on-chain. These Oracle chains can be
            used to query for data consistently over time for any resource coded
            into that chain. This can be used to query out to multiple exchanges
            to learn the current real-world value relation of any trade medium
            to any other. Using an example, queries will be used to record the
            current value over several exchanges and information resources for
            each real trade-medium in relation to Notes such as USD-Note,
            BTC-Note, and USD-BTC. What this will allow is added security in
            that to corrupt the information, not only will one exchange or
            information resource have to be compromised, but rather a majority
            over every input included on Symphony related to the specific trade
            medium targeted, as majority consensus within a certain margin of
            error will be taken to determine the next balancing action. Given
            differing security structures for each of these resources, this is
            very unlikely.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-h6 md:text-h5 xl:text-h3 font-semibold">
            2.2 Balancing and Rebalancing
          </h3>
          <p className="mt-7.5">
            A pool with Notes specifically reserved for rebalancing any given
            Harmony will be created using transaction fees generated through use
            of the network. This will be used to rebalance the system using one
            primary backup and one secondary backup method. The primary method
            is to use this reserve pool to push up the number of Notes in the
            system so that the current total market cap of Notes included will
            be of equal value to the amount of Harmony-Coin currently in use.
            The following diagram shows the architecture to be used, with the
            explanation beneath going over each potential scenario to address:
          </p>
          <img
            className="w-full max-w-[882px] mx-auto my-5 p-2 md:p-4 rounded-lg"
            src="/src/assets/images/exchange_dark.png"
            alt="Exchange Diagram"
          />
          <p className="mt-5">
            Assuming consensus over the various queries results in a marked
            imbalance of paired Note market value vs harmonized trade mediums,
            each possible imbalance will be addressed in the following ways,
            with PMoE being a reference to the Percent Margin of Error and HUSD
            being the exampler:
          </p>
          <ul className="list-disc mt-5 px-6 md:pl-8">
            <li className="relative">
              Arbitrage Trading:
              <br />
              <p className="px-6 before:content-['\25CB'] before:absolute before:left-2 before:text-[8px]">
                During the normal course of events, regular arbitrage trading
                should allow the value of HUSD related to USD to stay within
                some reasonable Margin of Error. Until this level is exceeded,
                no further action needs to be taken, as users will keep the
                balance themselves by selling the HUSD into Notes when the value
                of HUSD is high or selling Notes into HUSD when the value of
                HUSD is low.
              </p>
            </li>
            <li className="mt-2.5 relative">
              USD &gt; MLD * 1 - PMoE:
              <br />
              <p className="px-6 before:content-['\25CB'] before:absolute before:left-2 before:text-[8px]">
                Should the margin of error allowable for arbitrage trading vs
                the value in the previous epoch be exceeded, a check will be
                done on the Oracle networks to see the course of action for the
                rebalance. After this check verifies the course of action
                required, Notes will be injected from the reserve into the
                Harmony to bring up the market cap of paired Notes to match the
                current market cap of HUSD.
              </p>
            </li>
            <li className="mt-2.5 relative">
              USD &lt; MLD * 1 - PMoE:
              <br />
              <p className="px-6 before:content-['\25CB'] before:absolute before:left-2 before:text-[8px]">
                Should the margin of error allowable for arbitrage trading vs
                the value in the previous epoch be exceeded, a check will be
                done on the Oracle networks to see the course of action for the
                rebalance. While no action is required in this
                overcollateralized case, funds should be withdrawn from the
                exchange back to the reserve to maintain balance of funds. This
                may create a situation where the reserve is over the required
                balance, but this isn’t a problem, as this lowers available
                supply of and increases value of the native coin.
              </p>
            </li>
          </ul>
        </div>
        <div className="mt-12">
          <h3 className="text-h6 md:text-h5 xl:text-h3 font-semibold">
            2.3 Safeguards
          </h3>
          <p className="mt-7.5">
            Given the events that surrounded the Terra stablecoin within the
            Luna chain due to their reliance on a singular source of truth
            (arbitrage) as well as their lack of safeguards in case of mass user
            panic, the following logic shall be put in place to ensure all users
            are eventually made whole and that balance is restored to Symphony.
            This will again use HUSD as an example:
          </p>
          <ul className="list-disc mt-5 px-6 md:pl-8">
            <li className="relative">
              Paired Notes Stored Value + Reserve Total Value &lt; HUSD Total
              Value:
              <br />
              <p className="px-6 before:content-['\25CB'] before:absolute before:left-2 before:text-[8px]">
                Should the stored market cap of paired Notes plus the total of
                the reserve account drop below the market cap of the Harmony in
                question, pending transactions recording the uncompleted
                withdrawals of the users should be created and updated
                regularly. The transaction values saved through these pending
                transactions should be automatically removed as Note is
                deposited from the reserve system, which continuously refills as
                the network is used. This method is the backup failsafe to
                ensure every user is eventually made whole while Symphony is
                still being used, and matches the current functionality of the
                US Federal Reserve in a decentralized, non-inflationary manner.
              </p>
            </li>
            <li className="mt-2.5 relative">
              Information compromise on oracle networks:
              <br />
              <p className="px-6 before:content-['\25CB'] before:absolute before:left-2 before:text-[8px]">
                There should be more than x paired relations being read-in from
                y oracle networks at any given time. This should prevent
                singular attacks from affecting the larger system by
                disregarding outliers. Further, this should only occur should
                arbitrage trading bring price outside the acceptable margin of
                error. This altogether would require a massive attack on both
                the majority of incoming information streams as well as enough
                capital to sway user emotion against Symphony to the point of
                pushing price relations outside of acceptable parameters. Given
                this occurring, there are still the pending transactions that
                will make users whole as long as the network continues to be
                used. Provided the attack eventually ceases, users will see a
                return to normalcy within their accounts shortly after, provided
                the larger network continues to be used.
              </p>
            </li>
            <li className="mt-2.5 relative">
              Inability to fulfill trade due to lack of reserve supply:
              <br />
              <p className="px-6 before:content-['\25CB'] before:absolute before:left-2 before:text-[8px]">
                Transactions unable to be filled due to lack of reserve supply
                should be split into smaller fulfillment transactions and set
                into a delayed transaction queue. While no portion of the trade
                has yet been filled, the trade should be cancellable. Any
                portion of the transaction completed should be sent from the
                delayed transaction queue into the transaction queue where
                processes then proceed as before as seen in the diagram below:
              </p>
              <img
                className="w-full max-w-[882px] mx-auto my-5 p-2 md:p-4 rounded-lg"
                src="/src/assets/images/delayed_tx_process_dark.png"
                alt="Delayed Transaction Diagram"
              />
            </li>
          </ul>
          <p className="mt-5">
            It should be noted here that this reserve system, while being a
            safeguard in itself, will also be safeguarded against hacking by
            limiting its transaction capability. The reserve itself can receive
            transactions from anywhere, but can only send transactions to
            addresses within the Harmony pool. From there, this pool can only
            send Notes to addresses listed as being depositors, beginning with
            those marked as having pending transactions.
          </p>
          <p className="mt-5">
            Notice that during times of regular function, any coins within this
            reserve pool are removed from circulation, as they cannot affect
            anything until certain conditions are met, and only for a limited
            time as the reserve must be automatically re-filled as on-chain
            activity returns to normal.
          </p>
        </div>
      </div>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          3. Monetary Policy
        </h2>
        <p className="mt-10">
          At the core of each cryptocurrency is a monetary policy the creators
          of that currency deem most likely to lead to stability for that
          ecosystem. This can always be re-evaluated at a later date given a
          vote is conducted and the changes approved, but most cryptocurrencies
          find a fixed cap on coins is best to at least start with. Monero and
          Ethereum are exceptions here.
        </p>
        <p className="mt-5">
          Common problems a good monetary policy aims to solve are a maximum
          supply that is reachable and creates an affordable price for incoming
          users, inflation as incentive to gain users, inflation after adoption
          to retain users, the transaction fee structure, how those running the
          network get paid, and what to do when the value of the unit becomes
          too large for regular use.
        </p>
        <p className="mt-5">
          To this end, Symphony will use a maximum circulating supply of 1
          billion. This larger supply is intended to allow for ease of purchase
          into the future as Symphony begins to take on several of the
          challenges engaged with by the current financial system while allowing
          for a certain allotment of coins towards the various reserves where
          they will be locked until certain conditions are met. Symphony will
          otherwise match Bitcoin’s tokenomics, which are generally considered
          to be good. This will begin with 750 million Melody in circulation and
          begin by providing 431.252 million coins in the first four years. This
          averages to a 3.93% inflation per year. This reward level will be
          halved every four years. This plan allows for growth while avoiding an
          outsized removal of value from a user’s coin holdings. Much like with
          Bitcoin, the maximum supply will never be reached, and as the
          inflation rate drops, miners will continue to be paid through fees
          paid on the system.
        </p>
        <p className="mt-5">
          From the initial token allocation of 750 million, the distribution
          will be set as:
        </p>
        <ul className="list-line px-6 md:pl-8">
          <li className="pl-3">Investors: 100 million</li>
          <li className="pl-3">Founders, team, and advisors: 80 million</li>
          <li className="pl-3">Listing: 60 million</li>
          <li className="pl-3">
            Orchestra Labs (marketing and development): 360 million
          </li>
          <li className="pl-3">Ecosystem Growth: 150 million</li>
        </ul>
        <p className="mt-5">
          The fees paid from use of the system will be created through a
          summation of the various attributes that require attention for
          continued maintenance of Symphony. This will include a steady miner
          pay of 0.00025% per transaction as well as fees for the reserve pool,
          the developer pay pool, spam, and voting. In addition to the basic
          transaction fee for miner pay, miners on Symphony will also be paid
          through inflation as well as through the fees levied for spam and
          voting.
        </p>
        <p className="mt-5">
          Should they require funding, the fees for the developer pay pool and
          the reserve, much like the miner pay, will start at 0.0002% and be
          increased exponentially depending on the amount missing from each
          pool. The sum of all fees on any given transaction, excluding the spam
          fee, should have a cap of 1%, so this increase of the fees will not be
          unlimited. The spam fee is the exception here in that it is capped
          only by the amount sent in each transaction minus the other
          transaction fees. This amount is compounded only for the wallet of
          origin and will begin at 0 Notes, then increase to 0.0001%, and then
          begin increasing exponentially once per transaction sent within the
          same block for as long as transactions are sent within the same block.
        </p>
        <p className="mt-5">
          It should be noted here that for purposes of maintenance, the
          transaction fees generated when transferring from the miners to the
          necessary pool will not incur any fees themselves. In addition, should
          the maximum cap on the coin be scrapped in favor of an inflation based
          approach, that is up to those users voting at that future date.
        </p>
      </div>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          4. Sharding
        </h2>
        <p className="mt-10">
          Sharding is a method used by databases to allow for distributed data
          across multiple machines making the overall system more scalable.
          Given that cryptocurrencies store data across multiple machines
          themselves, this is a possibility for introduction into the crypto
          space as well, though it will naturally introduce some new trade-offs,
          as Ethereum, Cardano, and Near are finding now. These tradeoffs
          include the introduction of new challenges such as cross-shard
          communication, data availability, and the shard takeover attack, but
          also include the introduction of new benefits such as horizontal
          instead of vertical scaling, parallel processing of transactions, and
          lowered transaction fees, given transaction fees scale on volume
          within the shard rather than across the network like on Ethereum or
          Solana.
        </p>
        <p className="mt-5">
          Three main considerations were taken when determining how to split the
          shards to best reduce the effect of high numbers of transactions:
          geography, relationships between nodes, and transaction quantity
          itself. Symphony will initially disregard geography and node
          relationships in favor of focusing on transaction quantity due to the
          following reasons:
        </p>
        <ul className="list-disc mt-5 px-6 md:pl-8">
          <li>
            Geography, while important when considering latency, can likely be
            disregarded, as the chain itself is more to record final
            transactions than constant messages. This parameter can either be
            handled later as new concerns and use cases are uncovered, or
            handled by higher level applications built on top of Symphony.
          </li>
          <li>
            Relationships between nodes, while important when trying to minimize
            cross-shard transactions, can likely be disregarded, as
            relationships between nodes may change quickly, and the downtime
            incurred from rebuilding shards to reflect these changing
            relationships can be problematic to users.
          </li>
        </ul>
        <p className="mt-5">
          The primary goal of using shards on the blockchain is to minimize the
          effect of large transaction quantities on the network, ensuring quick,
          reliable transactions regardless of the number of users. To that end,
          this approach needs to ensure the following:
        </p>
        <ul className="list-disc mt-5 px-6 md:pl-8">
          <li>
            Scalability: The number of shards should increase or decrease as
            necessary to provide a consistent experience no matter number of
            nodes.
          </li>
          <li>
            Availability: Downtime for nodes while updating state or changing
            shard configuration should be minimal.
          </li>
          <li>
            Traceability: The shards involved in any transaction should be easy
            to determine from the transaction information.
          </li>
          <li>
            Efficiency: There should be as few communications as necessary to
            complete any singular transaction.
          </li>
          <li>
            Adaptability: These processes should be automatic, and should scale
            to both current and future scenarios appropriately.
          </li>
        </ul>
        <div className="mt-12">
          <h3 className="text-h6 md:text-h5 xl:text-h3 font-semibold">
            4.1 Sharding Method
          </h3>
          <p className="mt-7.5">
            There are three main sharding models being looked at while
            considering how to shard Symphony. These belong to Ethereum, Near,
            and Elrond. Ethereum is applying sharding as a higher layer which
            will primarily boost the capabilities of their level 2 solutions.
            Meanwhile Near uses an approach that splits block production and
            Elrond uses a sharding approach that splits the full state.
          </p>
          <p className="mt-5">
            There are issues that Near claims are more likely on blockchains
            such as Elrond, such as the possibility of forking or a malicious
            block being hidden due to not being checked in time. As mentioned in
            Near’s whitepaper, in either the case of forking or hiding malicious
            blocks as well as other attack vectors, once the error is
            introduced, it is likely to propagate throughout the network, as the
            benefit of checking so far back is minimal to none for any given
            validator. The safeguards introduced in Near’s approach, however,
            are likely to fix these mentioned issues regardless of if full state
            is sharded or only the transaction processing. As such, it doesn’t
            seem unreasonable to choose either approach.
          </p>
          <p className="mt-5">
            At present, Elrond’s sharding mechanism is fully online, while
            Near’s is only beginning to ramp up at time of writing. Elrond also
            seems to have lower hardware requirements, creating validator
            requirements in-range for most everyday consumers. Unfortunately,
            Elrond’s approach of sharding the full state appears to have worked
            at a 1-2 shard level, but began to break down at the 3 shard level
            when pulled out of testing into real-world scenarios with smart
            contract utilization. On top of this, despite the benefit of
            Elrond’s lower hardware requirements, the transaction finality on
            Near and lack of successful hacks of its protocol are far more
            beneficial to the larger use case Symphony is targeting.
          </p>
          <p className="mt-5">
            At time of writing it is currently believed that the benefit of
            lower transaction finality time and the benefit of having sharding
            on the main layer as opposed to a higher layer prove Near’s
            Nightshade approach to be the best option for Symphony. A basic
            explanation of aspects of this approach are listed below:
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-h6 md:text-h5 xl:text-h3 font-semibold">
            4.2 Adaptive Sharding
          </h3>
          <p className="mt-7.5">
            Sharding is set to split the load of creation for each block. This
            split is based on the number of transactions rather than the number
            of nodes. Given this, it is still both inefficient and insecure to
            have too few validator nodes running on any individual shard.
            Sharding too much can lead to easier shard takeover attacks and
            other malicious activities. To that end, shard numbers should be
            able to scale bi-directionally on both the number of validators and
            the number of transactions. Should there be too many transactions
            per shard, the number of shards is increased. Should there be too
            few transactions or too few validators in any given shard, the
            number of shards is decreased.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-h6 md:text-h5 xl:text-h3 font-semibold">
            4.3 Security
          </h3>
          <p className="mt-7.5">
            Security for the shards is introduced through the use of fishermen
            and hidden validators. These roles are assigned during each block
            through a Verifiable Random Function (VRF). This will be weighted to
            ensure more reliable validators are more likely to be selected for
            any given role. Simultaneously, the amount of fishermen and hidden
            validators is randomized to prevent knowledge of how many validators
            need to be corrupted per shard, with the hidden validators securing
            their specific shard and fishermen securing the transactions of any
            shard they challenge.
          </p>
          <p className="mt-7.5">
            To prevent other malicious activity from validators, each validator
            will be required to send out the results of their work before being
            able to view and verify the results of others within their shard.
            This forces the validator to validate the transactions in their
            portion of the block, including a potential, deliberately included
            but random error. Failure to dismiss the block if it contains the
            error will naturally result in slashing, with the slashed coins
            being sent to the other validators.
          </p>
        </div>
        <div className="mt-12">
          <h3 className="text-h6 md:text-h5 xl:text-h3 font-semibold">
            4.4 Onboarding
          </h3>
          <p className="mt-7.5">
            Onboarding of new validators is one area where Symphony will differ
            from Near’s Nightshade. Naturally, with the speed at which blocks
            will be produced, new nodes will have problems getting up and
            running due to time delay from downloading the entirety of the
            chain’s data. While this may require another storage solution at
            some point in the future, other chains have been using Merkle trees
            to great success. In this case, onboarding can be done using this
            Merkle tree, allowing any new node to begin validating from the last
            valid state block and compute only the following blocks, while
            downloading the previous blocks of the chain in the background.
          </p>
        </div>
      </div>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          5. Virtual Machine Layer
        </h2>
        <p className="mt-10">
          With implementation of the base chain to handle data and state, a
          Virtual Machine (VM) layer will need to be built on top of this to
          handle smart contracts and applications. Symphony will build its VM
          infrastructure using web assembly (WASM), which allows for compilation
          directly through the chain for multiple languages and higher
          efficiencies than the Ethereum virtual machine (EVM). Using this
          should allow great ease of use for incoming developers. This opens up
          Crypto to the entire Web Development community, potentially bringing
          in practiced User Experience designers who can attract non-crypto
          affiliated, everyday users who might be curious about the space but
          apprehensive about its complexity.
        </p>
      </div>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          6. Mining
        </h2>
        <p className="mt-10">
          Due to the high monetary and environmental costs of electricity, most
          chains have moved to staking algorithms for their miners. Symphony,
          for now, will be no exception.
        </p>
        <p className="mt-5">
          Proof of Work algorithms have the benefit of protecting users on the
          network from monetary takeovers by rich investors able to buy their
          way into a voting majority. Perhaps, at some point in the future, a
          sharded style Proof of Work algorithm will be beneficial for Symphony,
          but at present, most people in Crypto appear to prefer staking
          algorithms. As such, stakers and validators will be rewarded through
          any transaction fees, slashing fees, and spam fees incurred by users
          on the network.
        </p>
        <p className="mt-5">
          The rewards for mining will be split between all validators evenly.
          The reason for this distribution model is the hidden validators and
          fishermen. These less visible nodes can’t be said to have validated
          any given transaction, as their purpose is to validate the checks of
          other nodes. Their purpose is to add security to the network by
          policing other nodes both in their own shard and in other shards. They
          are rewarded for this operation in the same manner as other
          validators.
        </p>
      </div>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          7. Governance
        </h2>
        <p className="mt-10">
          As mentioned earlier, rich investors can buy their way into a voting
          majority on most staking-based chains. Voting on Symphony will be
          implemented with one vote per validating address rather than one vote
          per coin to try and curb this effect.
        </p>
        <p className="mt-5">
          In addition to one vote per validating address, this vote will be
          created using the aggregated vote of all staking parties, using one
          vote per staking address. The owner of the validator has the choice
          then to approve or deny this aggregated vote. Stakers who dislike the
          voting patterns of their particular validator can choose to un-stake
          and move to a validator with similarly voting stakers or a like-minded
          validator. A small voting fee will be taken to ensure those voting are
          considering the potential gain in value to the coin. Naturally, this
          will also mean fewer stakers on the validating node will impact the
          validator monetarily.
        </p>
        <p className="mt-5">
          To this end, the voting patterns of the validators vs the aggregated
          vote will need to be published so that stakers can take this
          information into account along with the validator’s chosen fees and
          other factors. A messaging system must also be implemented so that
          wallets can display the current vote. In addition to these factors, a
          small transaction cost will be implemented for voting to try and
          encourage voting specifically from the group of stakers that wish to
          increase the value of the token while discouraging multiple votes from
          users with multiple wallets. This voting fee will be paid to the
          miner, should the miner approve the vote. This is to encourage the
          miner to represent their stakers properly. Despite this monetary
          incentive, these miners still have the ability to reject votes they
          feel is not in their best interest, as the point of security for the
          network.
        </p>
      </div>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          8. Rollout
        </h2>
        <p className="mt-10">
          The rollout of Symphony will be made in several phases with the naming
          convention initially following the names of various composers
          throughout history:
        </p>
        <ul className="list-disc mt-5 px-6 md:pl-8">
          <li>
            Tchaikovsky: This release will introduce a basic chain with smart
            contract support and at least one Harmony enabled.
          </li>
          <li>
            Wagner: This release will enable sharding within block composition.
          </li>
          <li>
            Beethoven: This release will allow for the enabling of the developer
            pay pool.
          </li>
        </ul>
        <p className="mt-5">
          Further releases will follow this same naming convention and enable
          additional aspects as required to keep Symphony a leader in the space.
        </p>
      </div>
      <div className="mt-15">
        <h2 className="text-h4 md:text-h3 xl:text-h1 font-semibold text-white">
          9. Future Work
        </h2>
        <p className="mt-10">
          Symphony, like any other chain, will have many potential projects
          coming to it, provided the required level of community adoption is
          present. Future work regarding this chain may be completed once the
          work is handed off to the community, but the Orchestra organization
          will continue building for it through contributions to the chain
          itself or applications on it with the following projects:
        </p>
        <ul className="list-outside list-disc mt-5 px-6 md:pl-8">
          <li>
            Enable holding of multiple wallets on each validator to allow for
            native cross-chain exchanges. Melody will be the transaction medium
            between these currencies, using value relations between those chains
            and Symphony in a manner similar to the Harmonies enabled
            previously.
          </li>
          <li>
            With banks beginning to put crypto on their balance sheets at time
            of writing, create partnerships with several banks in various
            countries for them to act as on-ramps for blockchain users with
            accounts at those banks. This allows the banks to profit off crypto
            and simultaneously allows users to use reputable companies instead
            of potentially detrimental monoliths such as FTX. Should these
            partnerships not fail to materialize, create these on-ramps using
            Symphony by registering a neo-bank in various countries.
          </li>
          <li>
            After having gained the approval of the banking system, use this
            approval to gain a partnership with the SEC and the
            security-governing bodies of other countries to migrate the stock
            markets of these countries onto the chain, enabling programmability
            into stock offerings, such as benefits to stockholders or direct
            stakeholder voting.
          </li>
          <li>
            Gain approval from multiple governments to use Symphony for trade
            purposes, utilizing third party account as escrow account combined
            with smart contracts to ensure trade completion.
          </li>
          <li>
            Gain approval from one or more governments to create a mixer that
            leads to government verified wallets used specifically for voting
            purposes. The mixer here is to ensure no direct link is formed
            between a user’s financial transactions and voting wallet identity,
            ensuring user privacy.
          </li>
        </ul>
      </div>
    </div>
  </div>
);
