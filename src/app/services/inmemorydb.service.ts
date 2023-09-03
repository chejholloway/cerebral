/* eslint-disable max-len */
import { Injectable } from '@angular/core'
import { InMemoryDbService } from 'angular-in-memory-web-api'

@Injectable({
  providedIn: 'root',
})
export class InMemoryDataService extends InMemoryDbService {
  createDb() {
    const chart = {
      meta: {
        currency: 'USD',
        symbol: 'AAPL',
        exchangeName: 'NMS',
        instrumentType: 'EQUITY',
        firstTradeDate: 345479400,
        regularMarketTime: 1601409602,
        gmtoffset: -14400,
        timezone: 'EDT',
        exchangeTimezoneName: 'America/New_York',
        regularMarketPrice: 114.09,
        chartPreviousClose: 114.96,
        previousClose: 114.96,
        scale: 3,
        priceHint: 2,
        currentTradingPeriod: {
          pre: {
            timezone: 'EDT',
            start: 1601452800,
            end: 1601472600,
            gmtoffset: -14400,
          },
          regular: {
            timezone: 'EDT',
            start: 1601472600,
            end: 1601496000,
            gmtoffset: -14400,
          },
          post: {
            timezone: 'EDT',
            start: 1601496000,
            end: 1601510400,
            gmtoffset: -14400,
          },
        },
        tradingPeriods: {
          pre: [
            [
              {
                timezone: 'EDT',
                start: 1601366400,
                end: 1601386200,
                gmtoffset: -14400,
              },
            ],
          ],
          post: [
            [
              {
                timezone: 'EDT',
                start: 1601409600,
                end: 1601424000,
                gmtoffset: -14400,
              },
            ],
          ],
          regular: [
            [
              {
                timezone: 'EDT',
                start: 1601386200,
                end: 1601409600,
                gmtoffset: -14400,
              },
            ],
          ],
        },
        dataGranularity: '5m',
        range: '1d',
        validRanges: [
          '1d',
          '5d',
          '1mo',
          '3mo',
          '6mo',
          '1y',
          '2y',
          '5y',
          '10y',
          'ytd',
          'max',
        ],
      },
      timestamp: [
        1601367300,
        1601367600,
        1601367900,
        1601368200,
        1601368500,
        1601368800,
        1601369100,
        1601369700,
        1601370000,
        1601370300,
        1601370600,
        1601370900,
        1601371200,
        1601371500,
        1601371800,
        1601372100,
        1601372400,
        1601372700,
        1601373000,
        1601373300,
        1601373600,
        1601373900,
        1601374200,
        1601374500,
        1601374800,
        1601375100,
        1601375400,
        1601375700,
        1601376000,
        1601376300,
        1601376600,
        1601376900,
        1601377200,
        1601377500,
        1601377800,
        1601378100,
        1601378400,
        1601378700,
        1601379000,
        1601379300,
        1601379600,
        1601379900,
        1601380200,
        1601380500,
        1601380800,
        1601381100,
        1601381400,
        1601381700,
        1601382000,
        1601382300,
        1601382600,
        1601382900,
        1601383200,
        1601383500,
        1601383800,
        1601384100,
        1601384400,
        1601384700,
        1601385000,
        1601385300,
        1601385600,
        1601385900,
        1601386200,
        1601386500,
        1601386800,
        1601387100,
        1601387400,
        1601387700,
        1601388000,
        1601388300,
        1601388600,
        1601388900,
        1601389200,
        1601389500,
        1601389800,
        1601390100,
        1601390400,
        1601390700,
        1601391000,
        1601391300,
        1601391600,
        1601391900,
        1601392200,
        1601392500,
        1601392800,
        1601393100,
        1601393400,
        1601393700,
        1601394000,
        1601394300,
        1601394600,
        1601394900,
        1601395200,
        1601395500,
        1601395800,
        1601396100,
        1601396400,
        1601396700,
        1601397000,
        1601397300,
        1601397600,
        1601397900,
        1601398200,
        1601398500,
        1601398800,
        1601399100,
        1601399400,
        1601399700,
        1601400000,
        1601400300,
        1601400600,
        1601400900,
        1601401200,
        1601401500,
        1601401800,
        1601402100,
        1601402400,
        1601402700,
        1601403000,
        1601403300,
        1601403600,
        1601403900,
        1601404200,
        1601404500,
        1601404800,
        1601405100,
        1601405400,
        1601405700,
        1601406000,
        1601406300,
        1601406600,
        1601406900,
        1601407200,
        1601407500,
        1601407800,
        1601408100,
        1601408400,
        1601408700,
        1601409000,
        1601409300,
        1601409600,
        1601410500,
        1601410800,
        1601411100,
        1601411400,
        1601411700,
        1601412000,
        1601412300,
        1601412600,
        1601412900,
        1601413200,
        1601413500,
        1601413800,
        1601414100,
        1601414400,
        1601414700,
        1601415000,
        1601415300,
        1601415600,
        1601415900,
        1601416200,
        1601416500,
        1601416800,
        1601417100,
        1601417400,
        1601417700,
        1601418000,
        1601418300,
        1601418600,
        1601418900,
        1601419200,
        1601419500,
        1601419800,
        1601420100,
        1601420400,
        1601420700,
        1601421000,
        1601421300,
        1601421600,
        1601421900,
        1601422200,
        1601422500,
        1601422800,
        1601423100,
        1601423400,
        1601423700,
      ],
      indicators: {
        quote: [
          {
            close: [
              114.34,
              114.3,
              114.43,
              114.62,
              114.55,
              114.59,
              114.58,
              114.5,
              114.68,
              114.5,
              114.61,
              114.69,
              114.75,
              114.6,
              114.51,
              114.39,
              114.4,
              114.39,
              114.55,
              114.54,
              114.5,
              114.7,
              114.8,
              114.7,
              114.75,
              114.95,
              115.1,
              115,
              115.09,
              115.11,
              114.73,
              114.8,
              114.8,
              114.83,
              114.9,
              115.05,
              115,
              115.1,
              114.85,
              114.66,
              114.86,
              114.55,
              114.6,
              114.59,
              114.67,
              114.65,
              114.48,
              114.55,
              114.46,
              114.7,
              114.7,
              114.74,
              114.75,
              114.81,
              114.82,
              114.7899,
              114.75,
              114.7,
              114.94,
              114.9,
              114.7529,
              114.6499,
              115.02999877929688,
              114.91300201416016,
              114.01000213623047,
              114.19450378417969,
              113.96849822998047,
              113.93499755859375,
              114.01300048828125,
              114.375,
              114.51000213623047,
              114.70500183105469,
              114.53900146484375,
              114.32009887695312,
              113.95980072021484,
              113.93000030517578,
              113.94000244140625,
              113.93000030517578,
              114.00039672851562,
              113.94999694824219,
              114.03500366210938,
              114.06500244140625,
              113.97059631347656,
              113.97000122070312,
              114.18000030517578,
              114.11000061035156,
              114.19999694824219,
              114.4437026977539,
              114.05999755859375,
              113.81929779052734,
              113.97049713134766,
              113.94999694824219,
              113.86009979248047,
              114.02890014648438,
              113.8738021850586,
              113.92160034179688,
              113.93000030517578,
              114.03050231933594,
              114.02999877929688,
              114.12989807128906,
              114.03500366210938,
              114.125,
              114.08000183105469,
              114.24500274658203,
              114.06999969482422,
              113.86990356445312,
              113.76000213623047,
              113.88500213623047,
              113.81999969482422,
              113.9800033569336,
              114.0199966430664,
              114.04000091552734,
              113.96900177001953,
              114.17009735107422,
              114.3115005493164,
              114.31999969482422,
              114.2385025024414,
              114.37999725341797,
              114.322998046875,
              114.44499969482422,
              114.2947998046875,
              114.41000366210938,
              114.57499694824219,
              114.60929870605469,
              114.58999633789062,
              114.51000213623047,
              114.51000213623047,
              114.3949966430664,
              114.5199966430664,
              114.57589721679688,
              114.5696029663086,
              114.63999938964844,
              114.32009887695312,
              114.2500991821289,
              114.27999877929688,
              113.98500061035156,
              114.01000213623047,
              114.16500091552734,
              114.26000213623047,
              114.11000061035156,
              114.09,
              114.23,
              114.22,
              114.33,
              114.26,
              114.2,
              114.16,
              114.2,
              114.12,
              114.2,
              114.18,
              114.0999,
              114.08,
              114.08,
              113.91,
              113.95,
              113.9699,
              113.95,
              113.93,
              113.99,
              113.99,
              114.0499,
              114,
              113.98,
              114.02,
              114.02,
              114.07,
              114.09,
              114.09,
              114.07,
              114.05,
              114.05,
              114.03,
              114.01,
              114.03,
              114.16,
              114.16,
              114.24,
              114.35,
              114.29,
              114.31,
              114.27,
              114.25,
              114.26,
              114.17,
              114.25,
            ],
            high: [
              115,
              114.34,
              114.43,
              114.62,
              114.7,
              114.59,
              114.68,
              114.74,
              114.69,
              114.54,
              114.65,
              114.69,
              114.89,
              114.76,
              114.65,
              114.53,
              114.51,
              114.4,
              114.62,
              114.58,
              114.58,
              114.7,
              114.84,
              114.77,
              114.85,
              114.98,
              115.1,
              115.1,
              115.09,
              115.11,
              115.06,
              114.83,
              114.8,
              115.07,
              114.9,
              115.2,
              115.15,
              115.19,
              115.11,
              114.9,
              115.01,
              114.95,
              114.73,
              114.66,
              114.67,
              114.84,
              114.66,
              115.2,
              114.56,
              114.7,
              114.82,
              114.8,
              114.8,
              114.95,
              114.88,
              114.84,
              114.78,
              114.8,
              115.03,
              115,
              114.9,
              114.7799,
              115.29000091552734,
              115.30999755859375,
              115.02999877929688,
              114.2699966430664,
              114.36000061035156,
              114.05999755859375,
              114.16000366210938,
              114.41999816894531,
              114.66000366210938,
              114.80000305175781,
              114.71499633789062,
              114.61990356445312,
              114.37000274658203,
              114.04000091552734,
              114.06999969482422,
              113.9800033569336,
              114.0999984741211,
              114.16999816894531,
              114.12000274658203,
              114.23999786376953,
              114.1500015258789,
              114.08999633789062,
              114.31999969482422,
              114.26000213623047,
              114.2300033569336,
              114.4800033569336,
              114.45500183105469,
              114.13999938964844,
              114.05500030517578,
              114.13999938964844,
              114.05000305175781,
              114.05010223388672,
              114.02999877929688,
              113.99929809570312,
              114.05999755859375,
              114.13999938964844,
              114.08000183105469,
              114.26000213623047,
              114.16999816894531,
              114.1500015258789,
              114.12999725341797,
              114.2699966430664,
              114.25,
              114.0801010131836,
              113.9000015258789,
              113.91999816894531,
              113.94999694824219,
              114.02999877929688,
              114.08999633789062,
              114.12999725341797,
              114.12000274658203,
              114.18000030517578,
              114.52999877929688,
              114.4000015258789,
              114.37770080566406,
              114.4000015258789,
              114.5,
              114.45999908447266,
              114.4749984741211,
              114.41999816894531,
              114.6084976196289,
              114.63999938964844,
              114.62000274658203,
              114.66999816894531,
              114.6500015258789,
              114.58000183105469,
              114.5199966430664,
              114.63999938964844,
              114.63999938964844,
              114.66500091552734,
              114.66999816894531,
              114.44000244140625,
              114.36000061035156,
              114.30909729003906,
              114.08000183105469,
              114.22000122070312,
              114.31999969482422,
              114.4800033569336,
              114.17,
              114.2703,
              114.24,
              114.39,
              114.35,
              114.26,
              114.3,
              114.25,
              114.34,
              114.2,
              114.25,
              114.19,
              114.15,
              114.08,
              114.05,
              114,
              114,
              113.97,
              113.97,
              114,
              114,
              114.05,
              114.05,
              114.01,
              114.06,
              114.09,
              114.1,
              114.1,
              114.11,
              114.1,
              114.09,
              114.1,
              114.03,
              114.06,
              114.03,
              114.29,
              114.2,
              114.24,
              114.35,
              114.34,
              114.31,
              114.3,
              114.26,
              114.26,
              114.26,
              114.25,
            ],
            open: [
              115,
              114.34,
              114.28,
              114.4,
              114.62,
              114.55,
              114.59,
              114.65,
              114.5,
              114.49,
              114.6,
              114.6,
              114.67,
              114.76,
              114.65,
              114.53,
              114.51,
              114.4,
              114.39,
              114.58,
              114.58,
              114.5,
              114.74,
              114.77,
              114.82,
              114.87,
              115,
              115.09,
              114.97,
              115.07,
              115.06,
              114.83,
              114.78,
              114.8,
              114.86,
              114.92,
              115.08,
              115.12,
              115.1,
              114.87,
              114.69,
              114.88,
              114.64,
              114.61,
              114.59,
              114.68,
              114.66,
              115.12,
              114.55,
              114.47,
              114.7,
              114.76,
              114.75,
              114.8,
              114.82,
              114.81,
              114.77,
              114.7499,
              114.68,
              114.91,
              114.89,
              114.7343,
              114.55000305175781,
              115.05999755859375,
              114.9000015258789,
              114.01010131835938,
              114.19999694824219,
              113.96499633789062,
              113.93009948730469,
              114.01419830322266,
              114.37000274658203,
              114.5,
              114.70359802246094,
              114.55000305175781,
              114.32499694824219,
              113.9530029296875,
              113.92500305175781,
              113.9220962524414,
              113.92500305175781,
              114,
              113.94999694824219,
              114.03990173339844,
              114.06990051269531,
              113.9800033569336,
              113.97000122070312,
              114.1884994506836,
              114.1500015258789,
              114.23999786376953,
              114.44000244140625,
              114.05999755859375,
              113.81500244140625,
              113.96499633789062,
              113.94999694824219,
              113.86000061035156,
              114.02870178222656,
              113.87100219726562,
              113.91999816894531,
              113.91999816894531,
              114.03980255126953,
              114.01069641113281,
              114.12999725341797,
              114.03929901123047,
              114.12650299072266,
              114.06999969482422,
              114.25,
              114.06500244140625,
              113.8687973022461,
              113.76000213623047,
              113.88929748535156,
              113.81999969482422,
              113.9708023071289,
              114.0199966430664,
              114.0364990234375,
              113.97000122070312,
              114.16999816894531,
              114.31999969482422,
              114.32150268554688,
              114.23500061035156,
              114.3895034790039,
              114.31999969482422,
              114.44290161132812,
              114.28500366210938,
              114.41500091552734,
              114.57929992675781,
              114.5999984741211,
              114.58999633789062,
              114.51000213623047,
              114.5,
              114.38999938964844,
              114.52359771728516,
              114.57499694824219,
              114.55999755859375,
              114.625,
              114.31999969482422,
              114.26000213623047,
              114.2750015258789,
              113.98500061035156,
              114.0199966430664,
              114.16000366210938,
              114.26000213623047,
              114.17,
              114.09,
              114.1871,
              114.21,
              114.3302,
              114.23,
              114.2,
              114.14,
              114.19,
              114.12,
              114.2,
              114.18,
              114.09,
              114.08,
              114.02,
              113.95,
              113.99,
              113.9,
              113.91,
              113.96,
              113.99,
              114,
              114.04,
              114,
              114,
              114.08,
              114.05,
              114.08,
              114.09,
              114.1,
              114.07,
              114.05,
              114.02,
              114.06,
              114.03,
              114.03,
              114.18,
              114.18,
              114.24,
              114.28,
              114.29,
              114.27,
              114.26,
              114.26,
              114.24,
              114.16,
            ],
            volume: [
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              6187571,
              2374151,
              3415400,
              2211004,
              2065709,
              1639008,
              1852058,
              1807202,
              1880031,
              1556206,
              1392186,
              1090244,
              1729592,
              2280220,
              1611727,
              1559688,
              1329681,
              1127614,
              1200526,
              1131698,
              1132033,
              758978,
              1194239,
              759267,
              848049,
              942459,
              1585400,
              1169049,
              1093970,
              914213,
              901524,
              841164,
              658260,
              839060,
              765548,
              1000709,
              631762,
              979609,
              639429,
              616291,
              490916,
              822590,
              1021236,
              1140425,
              943923,
              804094,
              636522,
              790605,
              642213,
              574397,
              623490,
              638462,
              1222658,
              745532,
              668340,
              618263,
              891730,
              773061,
              572411,
              583069,
              1231057,
              921746,
              715453,
              948480,
              794598,
              1087507,
              776340,
              944304,
              759129,
              1066051,
              1475006,
              1266217,
              946653,
              1336378,
              1098175,
              945420,
              1438642,
              2525128,
              5542508,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
              0,
            ],
            low: [
              114.34,
              114.2,
              114.23,
              114.4,
              114.55,
              114.55,
              114.55,
              114.5,
              114.5,
              114.49,
              114.5,
              114.6,
              114.67,
              114.57,
              114.51,
              114.39,
              114.24,
              114.22,
              114.39,
              114.53,
              114.5,
              114.5,
              114.74,
              114.62,
              114.75,
              114.85,
              114.96,
              114.93,
              114.94,
              115,
              114.73,
              114.8,
              114.75,
              114.8,
              114.85,
              114.8,
              115,
              115.1,
              114.85,
              114.65,
              114.69,
              114.5,
              114.5,
              114.48,
              114.52,
              114.65,
              114.48,
              114.45,
              114.42,
              114.46,
              114.66,
              114.69,
              114.64,
              114.8,
              114.6,
              114.75,
              114.68,
              114.65,
              114.64,
              114.7,
              114.7,
              114.6,
              114.40440368652344,
              114.73999786376953,
              113.86000061035156,
              113.94999694824219,
              113.83000183105469,
              113.76000213623047,
              113.84500122070312,
              113.93000030517578,
              114.37000274658203,
              114.43000030517578,
              114.4000015258789,
              114.31999969482422,
              113.87000274658203,
              113.69000244140625,
              113.72000122070312,
              113.56999969482422,
              113.78730010986328,
              113.94000244140625,
              113.80999755859375,
              113.9749984741211,
              113.89019775390625,
              113.89900207519531,
              113.91000366210938,
              114.0999984741211,
              114.11000061035156,
              114.22000122070312,
              113.91000366210938,
              113.77999877929688,
              113.80000305175781,
              113.91999816894531,
              113.79000091552734,
              113.80000305175781,
              113.81999969482422,
              113.81500244140625,
              113.83999633789062,
              113.87000274658203,
              113.88999938964844,
              114.01000213623047,
              113.98999786376953,
              113.98999786376953,
              114.04000091552734,
              114.0199966430664,
              113.97000122070312,
              113.76000213623047,
              113.68000030517578,
              113.68000030517578,
              113.79000091552734,
              113.81500244140625,
              113.97000122070312,
              114,
              113.93000030517578,
              113.95999908447266,
              114.15080261230469,
              114.23999786376953,
              114.19999694824219,
              114.21009826660156,
              114.30480194091797,
              114.22000122070312,
              114.2699966430664,
              114.25,
              114.38999938964844,
              114.47000122070312,
              114.51000213623047,
              114.45500183105469,
              114.47000122070312,
              114.36000061035156,
              114.33000183105469,
              114.41000366210938,
              114.4800033569336,
              114.44999694824219,
              114.1500015258789,
              114.12000274658203,
              114.16000366210938,
              113.9000015258789,
              113.8499984741211,
              114,
              113.98999786376953,
              113.93080139160156,
              114.09,
              114.05,
              114.09,
              114.09,
              114.2,
              114.09,
              114.16,
              114.14,
              114.07,
              114.09,
              114.16,
              114.06,
              114.08,
              111.34,
              113.85,
              113.92,
              113.89,
              113.88,
              113.91,
              113.95,
              113.98,
              113.98,
              114,
              113.98,
              113.98,
              114.02,
              114.05,
              114.07,
              114.08,
              114.07,
              114.04,
              114.05,
              114.02,
              114,
              114.01,
              114.03,
              114.16,
              114.18,
              114.24,
              114.28,
              114.09,
              114.25,
              114.25,
              114.24,
              114.16,
              114.16,
            ],
          },
        ],
      },
    }

    const summary = {
      zip: '95014',
      sector: 'Technology',
      fullTimeEmployees: 137000,
      longBusinessSummary: `Apple Inc. designs, manufactures,
        and markets smartphones, personal computers,
        tablets, wearables, and accessories worldwide.
        It also sells various related services.
        The company offers iPhone, a line of smartphones;
        Mac, a line of personal computers; iPad, a line
        of multi-purpose tablets; and wearables, home,
        and accessories comprising AirPods, Apple TV,
        Apple Watch, Beats products, HomePod, iPod touch,
        and other Apple-branded and third-party accessories.
        It also provides digital content stores and streaming
        services; AppleCare support services; and iCloud,
        a cloud service, which stores music, photos, contacts,
        calendars, mail, documents, and others. In addition,
        the company offers various service, such as
        Apple Arcade, a game subscription service;
        Apple Card, a co-branded credit card;
        Apple News+, a subscription news and
        magazine service; and Apple Pay,
        a cashless payment service, as well as
        licenses its intellectual property, and
        provides other related services. The company
        serves consumers, and small and mid-sized businesses;
        and the education, enterprise, and government
        markets. It sells and delivers third-party
        applications for its products through
        the App Store, Mac App Store, and Watch App Store.
        The company also sells its products through its
        retail and online stores, and direct sales force;
        and third-party cellular network carriers,
        wholesalers, retailers, and resellers.
        Apple Inc. has a collaboration with Google to develop
        COVID-19 tracking system for Android and
        iOS devices. Apple Inc. was founded in 1977
        and is headquartered in Cupertino, California.`,
      city: 'Cupertino',
      phone: '408-996-1010',
      state: 'CA',
      country: 'United States',
      companyOfficers: [],
      website: 'http://www.apple.com',
      maxAge: 86400,
      address1: 'One Apple Park Way',
      industry: 'Consumer Electronics',
    }

    const news = [
      {
        uuid: 'ffb8f1f4-d0d3-3b83-94f4-3ac288494b88',
        title: 'Apple removes two RSS feed readers from China App Store',
        link:
          'https://techcrunch.com/2020/09/30/apple-removes-two-rss-feed-readers-from-china-app-store/',
        summary:
          'It looks like Apple is scouring its Chinese App Store for any remaining services that may not sit well with Chinese censors.  Two RSS  reader apps, Reeder and Fiery Feeds, said this week that their iOS apps have been removed in China over content that is considered "illegal" in the country.  Feed readers of RSS, or Real Simple Syndication, are particularly troubling to the authority because they fetch content from third-party websites, allowing users to bypass China\'s Great Firewall and reach otherwise forbidden information.',
        publisher: 'TechCrunch',
        author: 'Rita Liao',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p id="speakable-summary">It looks like Apple is scouring its Chinese App Store for any remaining services that may not sit well with Chinese censors. Two <a class="crunchbase-link" href="https://crunchbase.com/organization/rss-com" target="_blank">RSS <span class="crunchbase-tooltip-indicator"></span></a> reader apps, <a href="https://twitter.com/reederapp/status/1310963891539709952">Reeder</a> and <a href="https://twitter.com/FieryFeeds/status/1310553289545658369">Fiery Feeds</a>, said this week that their iOS apps have been removed in China over content that is considered "illegal" in the country.</p> \n<p>Apps get banned in China for all sorts of reasons. Feed readers of RSS, or Real Simple Syndication, are particularly troubling to the authority because they fetch content from third-party websites, allowing users to bypass China\'s Great Firewall and reach otherwise forbidden information.</p> \n<p>Those who use RSS readers in China are scarce, as the majority of China\'s internet users -- <a href="http://www.xinhuanet.com/english/2020-09/29/c_139407669.htm">940 million as of late</a> -- receive their dose of news through domestic services, from algorithmic news aggregators such as ByteDance\'s Toutiao, WeChat\'s built-in content subscription feature, to apps of mainstream local outlets.</p>\n<div class="piano-inline-promo"></div> \n<p>Major political events and regulatory changes can trigger new waves of app removals, but it\'s unclear why the two RSS feed readers were pulled this week. Inoreader, a similar service, was banned from Apple\'s Chinese App Store <a href="https://twitter.com/Inoreader/status/1311208391679844352">back in 2017</a>. Feedly is also unavailable through the local App Store.</p> \n<p>The history of China\'s crackdown on RSS dates back to 2007 when the authority launched a <a href="https://techcrunch.com/2007/10/04/china-blocking-rss-feeds/">blanked ban</a> on web-based RSS feed aggregators. The latest incidents could well be part of Apple\'s business-as-usual in China: cleaning up foreign information services operating outside Beijing\'s purview, regardless of their reach.</p> \n<p>Prior to its ban, Fiery Feeds had about 1,000 monthly active users in China, it told TechCrunch. Its iOS version was available in China without the use of a VPN, though some of the synced services it supported were blocked. Reeder and Apple cannot be immediately reached for comment.</p> \n<p>"It seems [the ban] comes from the Chinese government, so I do see any use in appealing to Apple," said a spokesperson at Fiery Feeds.</p> \n<p>Apple has in recent times come under fire for deferring to censorship demands from China, a major market for its smartphone and app sale. The behemoth has purged its Chinese App Store of <a href="https://techcrunch.com/2017/07/29/apple-removes-vpn-apps-from-the-app-store-in-china/">VPN services</a>, <a href="https://techcrunch.com/2020/03/01/china-roundup-apple-closes-app-store-loophole/">video games</a>, and <a href="https://techcrunch.com/2020/06/11/pocket-castro-podcast-removed-from-china/">podcast apps</a> that lacked local authorization. Podcasts <a href="https://techcrunch.com/2019/06/04/apple-restricts-chinese-podcasts/">must get on a local hosting service</a> before Apple even considers distributing them to Chinese users. In other words, the iOS publishing procedure for apps and podcasts in China is increasingly subject to Beijing\'s scrutiny.</p> \n<p>At this rate, Apple\'s latest <a href="https://s2.q4cdn.com/470004039/files/doc_downloads/gov_docs/2020/Apple-Human-Rights-Policy.pdf">pledge</a> to commit to "freedom of information and expression" would offer little assurance to its investors who have <a href="https://www.reuters.com/article/us-apple-shareholders-idUSKCN20K1PV">voiced concerns</a> over Apple\'s app takedowns in China.</p> \n<p></p> \n<p></p> \n<p></p> \n<p></p> \n<p></p> \n<p></p> \n<p></p>',
        streams: [],
        ignore_main_image: false,
        published_at: 1601459734,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1600,
              height: 852,
              url:
                'https://s.yimg.com/uu/api/res/1.2/dFpa.53ggsyWUDEo_UJeqg--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ZLapeL_8n3Xl2xgc.eHbpw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait_retina',
              width: 1536,
              height: 818,
              url:
                'https://s.yimg.com/uu/api/res/1.2/utM0W5v7w2qav6T7uz3q_w--~B/Zmk9ZmlsbDtoPTgxODt3PTE1MzY7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 170,
              url:
                'https://s.yimg.com/uu/api/res/1.2/FqmZYXsJAwhrpT8gszFTqA--~B/Zmk9ZmlsbDtoPTE3MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ywyc7fAPWfwYhHOB5Bqw6g--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 341,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Mevl1Manp0_i95T9Yu6aZg--~B/Zmk9ZmlsbDtoPTM0MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 341,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Mevl1Manp0_i95T9Yu6aZg--~B/Zmk9ZmlsbDtoPTM0MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/A5aKCFlEFQgjkXaC1FvqdA--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 409,
              url:
                'https://s.yimg.com/uu/api/res/1.2/EkOiZzJmcoJMWCv9uv6SsA--~B/Zmk9ZmlsbDtoPTQwOTt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/pGSOxeJVtLZtUb3XBnZ1jw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/pGSOxeJVtLZtUb3XBnZ1jw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 85,
              url:
                'https://s.yimg.com/uu/api/res/1.2/jUrgv4AKSc2GXEzG_6wOlw--~B/Zmk9ZmlsbDtoPTg1O3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
              tags: null,
            },
          ],
          original_height: 852,
          original_width: 1600,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/dFpa.53ggsyWUDEo_UJeqg--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/0FOYTg8NrYQYFZVb4h3HSQ--~B/aD04NTI7dz0xNjAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/techcrunch_350/bda579bfd555e5695524612962475d93',
        },
        is_magazine: false,
        reference_id: 'ffb8f1f4-d0d3-3b83-94f4-3ac288494b88',
      },
      {
        uuid: 'd375850f-23c0-33a9-bcef-98728cbc394d',
        title:
          'Dow Jones Jumps 450 Points On Jobs Data, Coronavirus Stimulus Hopes; Apple, Tesla Advance',
        link:
          'https://www.investors.com/market-trend/stock-market-today/dow-jones-stock-market-rally-coronavirus-stimulus-jobs-data-disney-layoffs-apple-tesla-stock/?src=A00220&yptr=yahoo',
        summary:
          'The major stock indexes were higher early Wednesday on better-than-expected jobs data. Regeneron Pharmaceuticals jumped on coronavirus drug news.',
        publisher: "Investor's Business Daily",
        author: 'SCOTT LEHTONEN',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:BYND',
            label: 'Beyond Meat, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:DIS',
            label: 'Walt Disney Company (The)',
            score: 1,
          },
          {
            term: 'TICKER:REGN',
            label: 'Regeneron Pharmaceuticals, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:TSLA',
            label: 'Tesla, Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601481898,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1000,
              height: 563,
              url:
                'https://s.yimg.com/uu/api/res/1.2/GVeBgbrv5zPt6Ef6.ofcwQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/6_ndiWK3mviMHpp5RFZULA--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/2db79e3a5f872262009aff4ddf35cd4f',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/tk4wTlOaPm4kgza7OwHoSQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/6_ndiWK3mviMHpp5RFZULA--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/2db79e3a5f872262009aff4ddf35cd4f',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/hffVYdsursTIZ8BmZ.BuEg--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/6_ndiWK3mviMHpp5RFZULA--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/2db79e3a5f872262009aff4ddf35cd4f',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/DNtuZ96e77EkMKZbLQgHzg--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/6_ndiWK3mviMHpp5RFZULA--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/2db79e3a5f872262009aff4ddf35cd4f',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/miUJiKsrsrVFFy.poU_sVw--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/6_ndiWK3mviMHpp5RFZULA--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/2db79e3a5f872262009aff4ddf35cd4f',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/miUJiKsrsrVFFy.poU_sVw--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/6_ndiWK3mviMHpp5RFZULA--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/2db79e3a5f872262009aff4ddf35cd4f',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/1hV6mLPM9fg01dg5hRYAzQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/6_ndiWK3mviMHpp5RFZULA--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/2db79e3a5f872262009aff4ddf35cd4f',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 432,
              url:
                'https://s.yimg.com/uu/api/res/1.2/IdxcoC73ddM08fqXoAs.Ew--~B/Zmk9ZmlsbDtoPTQzMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/6_ndiWK3mviMHpp5RFZULA--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/2db79e3a5f872262009aff4ddf35cd4f',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/vBbALljoQyLE5Hxu0FWbHQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/6_ndiWK3mviMHpp5RFZULA--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/2db79e3a5f872262009aff4ddf35cd4f',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/vBbALljoQyLE5Hxu0FWbHQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/6_ndiWK3mviMHpp5RFZULA--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/2db79e3a5f872262009aff4ddf35cd4f',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/EVxtyqDH5YMSC0IER64gOw--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/6_ndiWK3mviMHpp5RFZULA--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/2db79e3a5f872262009aff4ddf35cd4f',
              tags: null,
            },
          ],
          original_height: 563,
          original_width: 1000,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/GVeBgbrv5zPt6Ef6.ofcwQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/6_ndiWK3mviMHpp5RFZULA--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/2db79e3a5f872262009aff4ddf35cd4f',
        },
        is_magazine: false,
        reference_id: 'd375850f-23c0-33a9-bcef-98728cbc394d',
      },
      {
        uuid: '24ca232b-8685-38f9-bb7f-97fe36adafb3',
        title: '3 Stocks to Hold for the Next 20 Years',
        link:
          'https://www.fool.com/investing/2020/09/30/3-stocks-to-hold-for-the-next-20-years/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          'With track records of innovation and mountains of free cash flow to fuel future growth, these are companies to have in your portfolio for years.',
        publisher: 'Motley Fool',
        author: 'Mike Strain, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:AMZN',
            label: 'Amazon.com, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:MSFT',
            label: 'Microsoft Corporation',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601479380,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1400,
              height: 992,
              url:
                'https://s.yimg.com/uu/api/res/1.2/N.qlT8p84Y8kzo265UFV7w--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/C85nLh3SLpvRGY2AR.SBhw--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/bd4defca1e55ae77d69e6907be70f80f',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/EZw8cIATeu.HxLDbEzJYtw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/C85nLh3SLpvRGY2AR.SBhw--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/bd4defca1e55ae77d69e6907be70f80f',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 227,
              url:
                'https://s.yimg.com/uu/api/res/1.2/_GiaHU76BtgYcq5g_Mf0Tg--~B/Zmk9ZmlsbDtoPTIyNzt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/C85nLh3SLpvRGY2AR.SBhw--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/bd4defca1e55ae77d69e6907be70f80f',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/0AQWkVuR1eDBiY41bvBjOw--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/C85nLh3SLpvRGY2AR.SBhw--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/bd4defca1e55ae77d69e6907be70f80f',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 453,
              url:
                'https://s.yimg.com/uu/api/res/1.2/YWrGBbqJzxj_ackm87.txg--~B/Zmk9ZmlsbDtoPTQ1Mzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/C85nLh3SLpvRGY2AR.SBhw--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/bd4defca1e55ae77d69e6907be70f80f',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 453,
              url:
                'https://s.yimg.com/uu/api/res/1.2/YWrGBbqJzxj_ackm87.txg--~B/Zmk9ZmlsbDtoPTQ1Mzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/C85nLh3SLpvRGY2AR.SBhw--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/bd4defca1e55ae77d69e6907be70f80f',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/tFSZaLrTskdgXCbgUpMoKg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/C85nLh3SLpvRGY2AR.SBhw--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/bd4defca1e55ae77d69e6907be70f80f',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 544,
              url:
                'https://s.yimg.com/uu/api/res/1.2/oUlO2dkmI1Wqtqthm9nmyQ--~B/Zmk9ZmlsbDtoPTU0NDt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/C85nLh3SLpvRGY2AR.SBhw--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/bd4defca1e55ae77d69e6907be70f80f',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/5U_.lylFRC6pq0cq4ImgQQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/C85nLh3SLpvRGY2AR.SBhw--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/bd4defca1e55ae77d69e6907be70f80f',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/5U_.lylFRC6pq0cq4ImgQQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/C85nLh3SLpvRGY2AR.SBhw--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/bd4defca1e55ae77d69e6907be70f80f',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 113,
              url:
                'https://s.yimg.com/uu/api/res/1.2/AA3PwEMBHKFO7mE.XD0xlg--~B/Zmk9ZmlsbDtoPTExMzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/C85nLh3SLpvRGY2AR.SBhw--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/bd4defca1e55ae77d69e6907be70f80f',
              tags: null,
            },
          ],
          original_height: 992,
          original_width: 1400,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/N.qlT8p84Y8kzo265UFV7w--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/C85nLh3SLpvRGY2AR.SBhw--~B/aD05OTI7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/bd4defca1e55ae77d69e6907be70f80f',
        },
        is_magazine: false,
        reference_id: '24ca232b-8685-38f9-bb7f-97fe36adafb3',
      },
      {
        uuid: '035d4a14-8f67-35b3-9552-461a8b9e7ce3',
        title: 'Is This Apple Supplier About to Break Higher?',
        link:
          'https://www.fool.com/investing/2020/09/30/is-this-apple-supplier-about-to-break-higher/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          'A change in the business model and a huge 5G smartphone upgrade opportunity could be tailwinds for this chipmaker.',
        publisher: 'Motley Fool',
        author: 'Harsh Chauhan, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:JBL',
            label: 'Jabil Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601478072,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1400,
              height: 814,
              url:
                'https://s.yimg.com/uu/api/res/1.2/AAum2ZkJeGanKW01t_Z.vg--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/_ewCtv9qEUfKZW3drgLR4A--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/73b100b45b434f4c24cf0f25a56af3aa',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/enQ0idCjeqVxsd3XItslUA--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/_ewCtv9qEUfKZW3drgLR4A--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/73b100b45b434f4c24cf0f25a56af3aa',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 186,
              url:
                'https://s.yimg.com/uu/api/res/1.2/.xjssLSpAK2uQ9OkfUB.Ew--~B/Zmk9ZmlsbDtoPTE4Njt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/_ewCtv9qEUfKZW3drgLR4A--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/73b100b45b434f4c24cf0f25a56af3aa',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/9B.3GHrOME4c3TYdWGOIcg--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/_ewCtv9qEUfKZW3drgLR4A--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/73b100b45b434f4c24cf0f25a56af3aa',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 372,
              url:
                'https://s.yimg.com/uu/api/res/1.2/OVXiiAkiRy98WuZbgBeHyg--~B/Zmk9ZmlsbDtoPTM3Mjt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/_ewCtv9qEUfKZW3drgLR4A--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/73b100b45b434f4c24cf0f25a56af3aa',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 372,
              url:
                'https://s.yimg.com/uu/api/res/1.2/OVXiiAkiRy98WuZbgBeHyg--~B/Zmk9ZmlsbDtoPTM3Mjt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/_ewCtv9qEUfKZW3drgLR4A--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/73b100b45b434f4c24cf0f25a56af3aa',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ChQrL3yZwVvi2Encq5BbXg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/_ewCtv9qEUfKZW3drgLR4A--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/73b100b45b434f4c24cf0f25a56af3aa',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 447,
              url:
                'https://s.yimg.com/uu/api/res/1.2/wR6aJ38JFClNfy73_oFaZQ--~B/Zmk9ZmlsbDtoPTQ0Nzt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/_ewCtv9qEUfKZW3drgLR4A--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/73b100b45b434f4c24cf0f25a56af3aa',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/7VdiW3Crz_3Z2_MWiiGlmw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/_ewCtv9qEUfKZW3drgLR4A--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/73b100b45b434f4c24cf0f25a56af3aa',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/7VdiW3Crz_3Z2_MWiiGlmw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/_ewCtv9qEUfKZW3drgLR4A--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/73b100b45b434f4c24cf0f25a56af3aa',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 93,
              url:
                'https://s.yimg.com/uu/api/res/1.2/moL103t3fucRdmLlYYd_mw--~B/Zmk9ZmlsbDtoPTkzO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/_ewCtv9qEUfKZW3drgLR4A--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/73b100b45b434f4c24cf0f25a56af3aa',
              tags: null,
            },
          ],
          original_height: 814,
          original_width: 1400,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/AAum2ZkJeGanKW01t_Z.vg--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/_ewCtv9qEUfKZW3drgLR4A--~B/aD04MTQ7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/73b100b45b434f4c24cf0f25a56af3aa',
        },
        is_magazine: false,
        reference_id: '035d4a14-8f67-35b3-9552-461a8b9e7ce3',
      },
      {
        uuid: '1efd76dd-07d7-3efc-be1d-afcfb5091056',
        title: 'Google Is Reportedly About to Clinch Its Fitbit Acquisition',
        link:
          'https://www.fool.com/investing/2020/09/30/google-is-reportedly-about-to-clinch-its-fitbit-ac/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          "It's now been nearly a year since Alphabet (NASDAQ: GOOG) (NASDAQ: GOOGL) subsidiary announced its proposed acquisition of Fitbit (NYSE: FIT) in a $2.1 billion deal that values the wearables maker at $7.35 per share.  During that time, concerns have mounted that Google might use Fitbit's sensitive health data for ad targeting, undermining user privacy and potentially undermining competition.  Regulators, particularly in the European Union where privacy protections are stronger, have been seeking various concessions and guarantees before approving the deal.",
        publisher: 'Motley Fool',
        author: 'Evan Niu, CFA, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:FIT',
            label: 'Fitbit, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOGL',
            label: 'Alphabet Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601478000,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1400,
              height: 933,
              url:
                'https://s.yimg.com/uu/api/res/1.2/T5ka4Dgr4swXlcAvLaDKiA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Gcw88ez2YURvdY3diSVreA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2f61bec6a83aede641abfe4eab8c1ea6',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/TfoZM2zcLAdN_.XnmwQY8w--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Gcw88ez2YURvdY3diSVreA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2f61bec6a83aede641abfe4eab8c1ea6',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 213,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Dbw6G_MH9Uzf.k1DTKmfvQ--~B/Zmk9ZmlsbDtoPTIxMzt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/Gcw88ez2YURvdY3diSVreA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2f61bec6a83aede641abfe4eab8c1ea6',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/SjvMw7NpbUj7jKifSe2KOA--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/Gcw88ez2YURvdY3diSVreA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2f61bec6a83aede641abfe4eab8c1ea6',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/2MFJW3LPlhbRWhLlsWOnTg--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/Gcw88ez2YURvdY3diSVreA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2f61bec6a83aede641abfe4eab8c1ea6',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/2MFJW3LPlhbRWhLlsWOnTg--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/Gcw88ez2YURvdY3diSVreA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2f61bec6a83aede641abfe4eab8c1ea6',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/xchnHD1Ri6t7P5uzzDFtTg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Gcw88ez2YURvdY3diSVreA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2f61bec6a83aede641abfe4eab8c1ea6',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 512,
              url:
                'https://s.yimg.com/uu/api/res/1.2/xv1n1OTKKRZ9TcOYIZLXWw--~B/Zmk9ZmlsbDtoPTUxMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/Gcw88ez2YURvdY3diSVreA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2f61bec6a83aede641abfe4eab8c1ea6',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/kAxs0WMTLxNvi0vwN.zCBw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Gcw88ez2YURvdY3diSVreA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2f61bec6a83aede641abfe4eab8c1ea6',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/kAxs0WMTLxNvi0vwN.zCBw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Gcw88ez2YURvdY3diSVreA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2f61bec6a83aede641abfe4eab8c1ea6',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 107,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Qa1G1m7YbE7puWW8zniwUA--~B/Zmk9ZmlsbDtoPTEwNzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/Gcw88ez2YURvdY3diSVreA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2f61bec6a83aede641abfe4eab8c1ea6',
              tags: null,
            },
          ],
          original_height: 933,
          original_width: 1400,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/T5ka4Dgr4swXlcAvLaDKiA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Gcw88ez2YURvdY3diSVreA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2f61bec6a83aede641abfe4eab8c1ea6',
        },
        is_magazine: false,
        reference_id: '1efd76dd-07d7-3efc-be1d-afcfb5091056',
      },
      {
        uuid: '65b53896-faf4-3a06-9d0d-a63cf3c83192',
        title:
          'Dow Jones Stocks To Buy And Watch In September 2020: Amgen, Apple, Home Depot, Microsoft',
        link:
          'https://www.investors.com/research/dow-jones-stocks/?src=A00220&yptr=yahoo',
        summary:
          'Among the Dow Jones stocks, Apple and Microsoft are among the top stocks to buy and watch in September 2020.',
        publisher: "Investor's Business Daily",
        author: 'SCOTT LEHTONEN',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:BA',
            label: 'Boeing Company (The)',
            score: 1,
          },
          {
            term: 'TICKER:INDU',
            label: 'Industrea Acquisition Corp.',
            score: 1,
          },
          {
            term: 'TICKER:NKE',
            label: 'Nike, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:WMT',
            label: 'Walmart Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601475333,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 945,
              height: 533,
              url:
                'https://s.yimg.com/uu/api/res/1.2/5C_eHf_.selca_oLgZSj2w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/rUA67Amu5xrdjDWX.KfHmg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/03b971cb37e1840380728e73ac1cf03c',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/rCgANGEhMuTuhRkAHNyiWg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/rUA67Amu5xrdjDWX.KfHmg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/03b971cb37e1840380728e73ac1cf03c',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/lRbsuVzvfzDtY3sZ0Or07A--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rUA67Amu5xrdjDWX.KfHmg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/03b971cb37e1840380728e73ac1cf03c',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/y1YIWo3LFgsIMvrg.EaGSA--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rUA67Amu5xrdjDWX.KfHmg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/03b971cb37e1840380728e73ac1cf03c',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 361,
              url:
                'https://s.yimg.com/uu/api/res/1.2/TERNTq.HCHMYO2XoV3I7vA--~B/Zmk9ZmlsbDtoPTM2MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rUA67Amu5xrdjDWX.KfHmg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/03b971cb37e1840380728e73ac1cf03c',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 361,
              url:
                'https://s.yimg.com/uu/api/res/1.2/TERNTq.HCHMYO2XoV3I7vA--~B/Zmk9ZmlsbDtoPTM2MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rUA67Amu5xrdjDWX.KfHmg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/03b971cb37e1840380728e73ac1cf03c',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/w.Ly1jLbIxfjQ18811WJTQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/rUA67Amu5xrdjDWX.KfHmg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/03b971cb37e1840380728e73ac1cf03c',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 433,
              url:
                'https://s.yimg.com/uu/api/res/1.2/3NGnmmU4MCIcHoMWzosCcQ--~B/Zmk9ZmlsbDtoPTQzMzt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rUA67Amu5xrdjDWX.KfHmg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/03b971cb37e1840380728e73ac1cf03c',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/t3UcJtUqmK3qypNO4feo3g--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/rUA67Amu5xrdjDWX.KfHmg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/03b971cb37e1840380728e73ac1cf03c',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/t3UcJtUqmK3qypNO4feo3g--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/rUA67Amu5xrdjDWX.KfHmg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/03b971cb37e1840380728e73ac1cf03c',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/blSMZugYiDPpiCC9lH6fAg--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/rUA67Amu5xrdjDWX.KfHmg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/03b971cb37e1840380728e73ac1cf03c',
              tags: null,
            },
          ],
          original_height: 533,
          original_width: 945,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/5C_eHf_.selca_oLgZSj2w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/rUA67Amu5xrdjDWX.KfHmg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/03b971cb37e1840380728e73ac1cf03c',
        },
        is_magazine: false,
        reference_id: '65b53896-faf4-3a06-9d0d-a63cf3c83192',
      },
      {
        uuid: '6bb170f8-342f-302c-85ae-77991be1339a',
        title: '2 Cheap Stocks to Protect Your Retirement Plan',
        link:
          'https://www.fool.com/investing/2020/09/30/2-cheap-stocks-to-protect-your-retirement-plan/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          "The coronavirus pandemic has produced a turbulent 2020 for investors so far.  If you held on through the historic collapse in March, then you likely saw many of your holdings soar by 50% or more in the months that followed as the stock market raced right back to new highs before pulling back in recent weeks.  There isn't much debate about why Procter & Gamble (NYSE: PG) is considered a top blue chip stock.",
        publisher: 'Motley Fool',
        author: 'Demitri Kalogeropoulos, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:PG',
            label: 'Procter & Gamble Company (The)',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601474400,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1400,
              height: 933,
              url:
                'https://s.yimg.com/uu/api/res/1.2/YRyQwymsamRqjlcqoWxxPw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/uJV9P4_HnOpGlQXdbbrSfA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3f00725c3e46e7ad2c218594514a8cba',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Ik.UfmxNQaNz6Nor1Du3Cg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/uJV9P4_HnOpGlQXdbbrSfA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3f00725c3e46e7ad2c218594514a8cba',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 213,
              url:
                'https://s.yimg.com/uu/api/res/1.2/x4frnCKIbqTJL8aVDuizvQ--~B/Zmk9ZmlsbDtoPTIxMzt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/uJV9P4_HnOpGlQXdbbrSfA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3f00725c3e46e7ad2c218594514a8cba',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/KjiDehjQ693Wh0K4hYSLLg--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/uJV9P4_HnOpGlQXdbbrSfA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3f00725c3e46e7ad2c218594514a8cba',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/JL34bCh0LxVAd6YRbLX4Tg--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/uJV9P4_HnOpGlQXdbbrSfA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3f00725c3e46e7ad2c218594514a8cba',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/JL34bCh0LxVAd6YRbLX4Tg--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/uJV9P4_HnOpGlQXdbbrSfA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3f00725c3e46e7ad2c218594514a8cba',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/UTFrZenhVa0DfEiDDRgweg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/uJV9P4_HnOpGlQXdbbrSfA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3f00725c3e46e7ad2c218594514a8cba',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 512,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ZzgZBE1FNa91TuYkDDSVtQ--~B/Zmk9ZmlsbDtoPTUxMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/uJV9P4_HnOpGlQXdbbrSfA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3f00725c3e46e7ad2c218594514a8cba',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/VOGYeIDWlodTbU9D.I6KWg--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/uJV9P4_HnOpGlQXdbbrSfA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3f00725c3e46e7ad2c218594514a8cba',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/VOGYeIDWlodTbU9D.I6KWg--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/uJV9P4_HnOpGlQXdbbrSfA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3f00725c3e46e7ad2c218594514a8cba',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 107,
              url:
                'https://s.yimg.com/uu/api/res/1.2/I1YHx_yUZkDnFbMewhzGrg--~B/Zmk9ZmlsbDtoPTEwNzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/uJV9P4_HnOpGlQXdbbrSfA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3f00725c3e46e7ad2c218594514a8cba',
              tags: null,
            },
          ],
          original_height: 933,
          original_width: 1400,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/YRyQwymsamRqjlcqoWxxPw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/uJV9P4_HnOpGlQXdbbrSfA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3f00725c3e46e7ad2c218594514a8cba',
        },
        is_magazine: false,
        reference_id: '6bb170f8-342f-302c-85ae-77991be1339a',
      },
      {
        uuid: '26c138cf-8f51-38d0-a536-0db81ab47b4d',
        title: 'Google Is Stoking Antitrust Criticisms at the Worst Possible Time',
        link:
          'https://www.fool.com/investing/2020/09/30/google-is-stoking-antitrust-criticisms-at-the-wors/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          "For Apple (NASDAQ: AAPL), the primary concerns relate to the iOS App Store and the company's 30% cut of digital sales and subscriptions.  For Alphabet (NASDAQ: GOOG) (NASDAQ: GOOGL) subsidiary Google, critics argue that Google's dominant position in search allows it to funnel users into its own online services.  In a bizarrely timed move, Google is about to further stoke antitrust concerns.",
        publisher: 'Motley Fool',
        author: 'Evan Niu, CFA, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOGL',
            label: 'Alphabet Inc.',
            score: 1,
          },
          {
            term: 'TICKER:NFLX',
            label: 'Netflix, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:SPOT',
            label: 'Spotify Technology S.A.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601470800,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1400,
              height: 700,
              url:
                'https://s.yimg.com/uu/api/res/1.2/0PexSt0FUiZOE4B39k6HBA--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/UIFKVJwWxeP1OCxinIdqSw--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3e7f05df19824f5f5cefa0428f6e2c3e',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/cj3snyJTA7Y74SgIpIL7Gw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/UIFKVJwWxeP1OCxinIdqSw--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3e7f05df19824f5f5cefa0428f6e2c3e',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 160,
              url:
                'https://s.yimg.com/uu/api/res/1.2/J2q5y8coct.A8ng2dVWRPw--~B/Zmk9ZmlsbDtoPTE2MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/UIFKVJwWxeP1OCxinIdqSw--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3e7f05df19824f5f5cefa0428f6e2c3e',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/D1aGjm0TXJvpICUCb6aJpA--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/UIFKVJwWxeP1OCxinIdqSw--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3e7f05df19824f5f5cefa0428f6e2c3e',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 320,
              url:
                'https://s.yimg.com/uu/api/res/1.2/R2BHkmC7W1v0uiKBNfhYnA--~B/Zmk9ZmlsbDtoPTMyMDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/UIFKVJwWxeP1OCxinIdqSw--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3e7f05df19824f5f5cefa0428f6e2c3e',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 320,
              url:
                'https://s.yimg.com/uu/api/res/1.2/R2BHkmC7W1v0uiKBNfhYnA--~B/Zmk9ZmlsbDtoPTMyMDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/UIFKVJwWxeP1OCxinIdqSw--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3e7f05df19824f5f5cefa0428f6e2c3e',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/1R3XCi2713oAOZjeUpAWUw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/UIFKVJwWxeP1OCxinIdqSw--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3e7f05df19824f5f5cefa0428f6e2c3e',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 384,
              url:
                'https://s.yimg.com/uu/api/res/1.2/JXLTqpUke08UViVDL3IYcg--~B/Zmk9ZmlsbDtoPTM4NDt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/UIFKVJwWxeP1OCxinIdqSw--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3e7f05df19824f5f5cefa0428f6e2c3e',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/zkgGGENf0b1jqkDJpdHx7Q--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/UIFKVJwWxeP1OCxinIdqSw--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3e7f05df19824f5f5cefa0428f6e2c3e',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/zkgGGENf0b1jqkDJpdHx7Q--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/UIFKVJwWxeP1OCxinIdqSw--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3e7f05df19824f5f5cefa0428f6e2c3e',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 80,
              url:
                'https://s.yimg.com/uu/api/res/1.2/PiguuWGbiXEMVm7z2axQdQ--~B/Zmk9ZmlsbDtoPTgwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/UIFKVJwWxeP1OCxinIdqSw--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3e7f05df19824f5f5cefa0428f6e2c3e',
              tags: null,
            },
          ],
          original_height: 700,
          original_width: 1400,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/0PexSt0FUiZOE4B39k6HBA--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/UIFKVJwWxeP1OCxinIdqSw--~B/aD03MDA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/3e7f05df19824f5f5cefa0428f6e2c3e',
        },
        is_magazine: false,
        reference_id: '26c138cf-8f51-38d0-a536-0db81ab47b4d',
      },
      {
        uuid: '93d2719e-589d-3a41-a971-7378007bddbe',
        title: 'Big Tech Faces Ban From Favoring Own Services Under EU Rules',
        link: 'https://finance.yahoo.com/news/big-tech-faces-ban-favoring-125817796.html',
        summary:
          '(Bloomberg) -- Big tech firms could be banned from preferencing their own services in search rankings or exclusively pre-installing their own applications on devices, under new regulations planned by the European Union.As part of the EU’s Digital Services Act, platforms with power to control could also have to share customer data with business rivals, according to internal draft documents obtained by Bloomberg.Due to be unveiled in December by the European Commission, the bloc’s executive body, the legislation will seek to modernize rules governing the internet to give platforms greater responsibility for what users post on their sites as well as propose regulation aimed at curbing the power of large platforms.The initiative comes as big giants such as Apple Inc. and Alphabet Inc.’s Google offer services across a widening array of sectors and as competitors increasingly rely on their platforms to offer their own services. Apple has faced heat over policies with its app store, which companies like Spotify Technology SA complain give an unfair advantage to the iPhone maker’s rival music service.The EU says in one of the documents it wants to “constrain unfair behavior” by digital gatekeepers, the platforms that other businesses depend on to get access to customers. One policy option describes a blacklist of unfair practices for platforms in several key sectors, including marketplaces, app stores and social networks as well as online search engines, operating systems and cloud services.A separate document outlining the potentially unfair practices says gatekeepers “shall not provide preferential display in online search engines or online intermediation services for their own services” and that “gatekeepers shall not pre-install exclusively their own applications,” nor restrict users from un-installing any of the apps.The commission’s antitrust arm has previously sought to tackle some of the issues highlighted in the document, including through several cases against Google. In 2017, it fined the search giant for unfairly promoting its own shopping service in search results. In 2018, the EU fined the company over its conduct with its Android mobile operating system, including paying phone makers to pre-install Google search.Competition law has failed to sufficiently address all the systemic problems in the platform economy, the EU has said, which is why it’s exploring legislation in the area.The document outlining unfair practices also says gatekeepers could be prohibited from using data collected on their platform for their own commercial services unless they share it with business users active in the same area. Amazon.com Inc. is currently being investigated by the EU’s antitrust watchdog on concerns it misuses merchants’ data to compete with its own sellers on its website.In addition, platforms that provide advertising services, like Facebook Inc. and Google, shall submit to an annual audit of their advertising metrics, the document says.The outlined measures are still at an early stage and could differ in the final proposal, which itself which would still need agreement from the bloc’s member states and the European Parliament before it enters into force -- a process that can take years.A commission spokesman declined to comment.Politico and the Financial Times reported about the leaked documents earlier.For more articles like this, please visit us at bloomberg.comSubscribe now to stay ahead with the most trusted business news source.©2020 Bloomberg L.P.',
        publisher: 'Bloomberg',
        author: 'Natalia Drozdiak',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:AMZN',
            label: 'Amazon.com, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:FB',
            label: 'Facebook, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOG',
            label: 'Alphabet Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOGL',
            label: 'Alphabet Inc.',
            score: 1,
          },
          {
            term: 'TICKER:PMPRX',
            label: 'Principal Fds, Inc. MidCap Valu',
            score: 1,
          },
          {
            term: 'TICKER:SPOT',
            label: 'Spotify Technology S.A.',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p>(Bloomberg) -- Big tech firms could be banned from preferencing their own services in search rankings or exclusively pre-installing their own applications on devices, under new regulations planned by the European Union.</p>\n<p>As part of the EU’s Digital Services Act, platforms with power to control could also have to share customer data with business rivals, according to internal draft documents obtained by Bloomberg.</p>\n<p>Due to be unveiled in December by the European Commission, the bloc’s executive body, the legislation will seek to modernize rules governing the internet to give platforms greater responsibility for what users post on their sites as well as propose regulation aimed at curbing the power of large platforms.</p>\n<p>The initiative comes as big giants such as Apple Inc. and Alphabet Inc.’s Google offer services across a widening array of sectors and as competitors increasingly rely on their platforms to offer their own services. Apple has faced heat over policies with its app store, which companies like Spotify Technology SA complain give an unfair advantage to the iPhone maker’s rival music service.</p>\n<p>The EU says in one of the documents it wants to “constrain unfair behavior” by digital gatekeepers, the platforms that other businesses depend on to get access to customers. One policy option describes a blacklist of unfair practices for platforms in several key sectors, including marketplaces, app stores and social networks as well as online search engines, operating systems and cloud services.</p>\n<p>A separate document outlining the potentially unfair practices says gatekeepers “shall not provide preferential display in online search engines or online intermediation services for their own services” and that “gatekeepers shall not pre-install exclusively their own applications,” nor restrict users from un-installing any of the apps.</p>\n<p>The commission’s antitrust arm has previously sought to tackle some of the issues highlighted in the document, including through several cases against Google. In 2017, it fined the search giant for unfairly promoting its own shopping service in search results. In 2018, the EU fined the company over its conduct with its Android mobile operating system, including paying phone makers to pre-install Google search.</p>\n<p>Competition law has failed to sufficiently address all the systemic problems in the platform economy, the EU has said, which is why it’s exploring legislation in the area.</p>\n<p>The document outlining unfair practices also says gatekeepers could be prohibited from using data collected on their platform for their own commercial services unless they share it with business users active in the same area. Amazon.com Inc. is currently being investigated by the EU’s antitrust watchdog on concerns it misuses merchants’ data to compete with its own sellers on its website.</p>\n<p>In addition, platforms that provide advertising services, like Facebook Inc. and Google, shall submit to an annual audit of their advertising metrics, the document says.</p>\n<p>The outlined measures are still at an early stage and could differ in the final proposal, which itself which would still need agreement from the bloc’s member states and the European Parliament before it enters into force -- a process that can take years.</p>\n<p>A commission spokesman declined to comment.Politico and the Financial Times reported about the leaked documents earlier.</p>\n<p>For more articles like this, please visit us at <a href="https://www.bloomberg.com">bloomberg.com</a></p>\n<p><a href="https://www.bloomberg.com/subscriptions/67obqkd5zdp5lj8/?utm_source=yahoo_usn">Subscribe now</a> to stay ahead with the most trusted business news source.</p>\n<p>©2020 Bloomberg L.P.</p>',
        streams: [],
        ignore_main_image: false,
        published_at: 1601470697,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 2000,
              height: 1162,
              url:
                'https://s.yimg.com/uu/api/res/1.2/VpWLTTcsCrQaTKvptKOyfw--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/f.FwfIwLjjajVQBdaFIF1Q--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait_retina',
              width: 1536,
              height: 892,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Uo5alE08Jf4W9RZ.ww3kBQ--~B/Zmk9ZmlsbDtoPTg5Mjt3PTE1MzY7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 186,
              url:
                'https://s.yimg.com/uu/api/res/1.2/04.Ay8oEJh2KPXFoi_gKFQ--~B/Zmk9ZmlsbDtoPTE4Njt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/U5iS2mLsMXpb3alxuvy.Aw--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 372,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ZDbr.KVB4fpgg8Ebb1Zz8g--~B/Zmk9ZmlsbDtoPTM3Mjt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 372,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ZDbr.KVB4fpgg8Ebb1Zz8g--~B/Zmk9ZmlsbDtoPTM3Mjt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/BDdpDfMHNVSempXaE2jJIQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 446,
              url:
                'https://s.yimg.com/uu/api/res/1.2/efnVG_PNFKdnrrsgqt0e2w--~B/Zmk9ZmlsbDtoPTQ0Njt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/asIlmmuhciReeFkm7O7R8g--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/asIlmmuhciReeFkm7O7R8g--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 93,
              url:
                'https://s.yimg.com/uu/api/res/1.2/evXmYOW5heSmSBrCkg5DwA--~B/Zmk9ZmlsbDtoPTkzO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
              tags: null,
            },
          ],
          original_height: 1162,
          original_width: 2000,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/VpWLTTcsCrQaTKvptKOyfw--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/PqKOiAIKQJ9Sro70mKK_AQ--~B/aD0xMTYyO3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/35212148dc2bb318aeae03ae0e047a2e',
        },
        is_magazine: false,
        reference_id: '93d2719e-589d-3a41-a971-7378007bddbe',
      },
      {
        uuid: '9f7accd1-0be1-3839-911a-0552fb20d2bf',
        title: 'Lessons You Can Learn From 2 Stocks That Turned $10,000 Into Millions',
        link:
          'https://www.fool.com/investing/2020/09/30/lessons-learn-stocks-turned-10000-into-millions/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          'Apple and Netflix have made long-term investors rich, but these huge winners had challenges along the way.',
        publisher: 'Motley Fool',
        author: 'Mike Strain, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:NFLX',
            label: 'Netflix, Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601468100,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1400,
              height: 695,
              url:
                'https://s.yimg.com/uu/api/res/1.2/cLRqvG7ExTRVFYRdVCjvkA--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/QgF_qXIvuAuZh7W528YVyQ--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f54bf783f85c1064593c7bfe867c171f',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/By3skIuhCTJwnB3UiIGWyQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/QgF_qXIvuAuZh7W528YVyQ--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f54bf783f85c1064593c7bfe867c171f',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 159,
              url:
                'https://s.yimg.com/uu/api/res/1.2/GKw71kguDBD.7Sn5vYvebQ--~B/Zmk9ZmlsbDtoPTE1OTt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/QgF_qXIvuAuZh7W528YVyQ--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f54bf783f85c1064593c7bfe867c171f',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Elc.t2Io1youxjFwCA28Lg--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/QgF_qXIvuAuZh7W528YVyQ--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f54bf783f85c1064593c7bfe867c171f',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 318,
              url:
                'https://s.yimg.com/uu/api/res/1.2/yT0PdsxrPm12kHK7zHKzYQ--~B/Zmk9ZmlsbDtoPTMxODt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/QgF_qXIvuAuZh7W528YVyQ--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f54bf783f85c1064593c7bfe867c171f',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 318,
              url:
                'https://s.yimg.com/uu/api/res/1.2/yT0PdsxrPm12kHK7zHKzYQ--~B/Zmk9ZmlsbDtoPTMxODt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/QgF_qXIvuAuZh7W528YVyQ--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f54bf783f85c1064593c7bfe867c171f',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/yO2q5JmQcCMpTHtZUi3H8w--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/QgF_qXIvuAuZh7W528YVyQ--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f54bf783f85c1064593c7bfe867c171f',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 381,
              url:
                'https://s.yimg.com/uu/api/res/1.2/D82yAvKknSPgjRvXiDoO0A--~B/Zmk9ZmlsbDtoPTM4MTt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/QgF_qXIvuAuZh7W528YVyQ--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f54bf783f85c1064593c7bfe867c171f',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/xBMpr6qAhnjDiJWiFO7Dsw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/QgF_qXIvuAuZh7W528YVyQ--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f54bf783f85c1064593c7bfe867c171f',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/xBMpr6qAhnjDiJWiFO7Dsw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/QgF_qXIvuAuZh7W528YVyQ--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f54bf783f85c1064593c7bfe867c171f',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 79,
              url:
                'https://s.yimg.com/uu/api/res/1.2/4YrWoCI4sRM.82Ts61fYdQ--~B/Zmk9ZmlsbDtoPTc5O3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/QgF_qXIvuAuZh7W528YVyQ--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f54bf783f85c1064593c7bfe867c171f',
              tags: null,
            },
          ],
          original_height: 695,
          original_width: 1400,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/cLRqvG7ExTRVFYRdVCjvkA--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/QgF_qXIvuAuZh7W528YVyQ--~B/aD02OTU7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f54bf783f85c1064593c7bfe867c171f',
        },
        is_magazine: false,
        reference_id: '9f7accd1-0be1-3839-911a-0552fb20d2bf',
      },
      {
        uuid: '8fa09f55-9e4a-34fa-8dbd-bd1c08f338e3',
        title:
          'Dow Jones Futures Fall 200 Points Amid Trump-Biden Debate; Regeneron Jumps On Coronavirus Drug News',
        link:
          'https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-stock-market-rally-trump-biden-debate-apple-tesla-beyond-meat-buy-point/?src=A00220&yptr=yahoo',
        summary:
          'Dow Jones futures were in focus early Wednesday amid the first presidential debate, as the stock market rally attempt continues.',
        publisher: "Investor's Business Daily",
        author: 'SCOTT LEHTONEN',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:BABA',
            label: 'Alibaba Group Holding Limited',
            score: 1,
          },
          {
            term: 'TICKER:BABAF',
            label: 'ALIBABA GROUP HOLDING LTD',
            score: 1,
          },
          {
            term: 'TICKER:BYND',
            label: 'Beyond Meat, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:MU',
            label: 'Micron Technology, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:TSLA',
            label: 'Tesla, Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601467808,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 945,
              height: 533,
              url:
                'https://s.yimg.com/uu/api/res/1.2/5Xlt94SIdgvUbXbWGkViJg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/1XnkB1T_MKLiyjpe94Qpaw--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/fefd51184abfe4e4a572e8f145358919',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/DMxoysr29E.423W0YLiHYw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/1XnkB1T_MKLiyjpe94Qpaw--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/fefd51184abfe4e4a572e8f145358919',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/EZV.EFqWwNwvesCcmfGa4g--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/1XnkB1T_MKLiyjpe94Qpaw--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/fefd51184abfe4e4a572e8f145358919',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ARPmu5a433u5xEC8eUQHOA--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/1XnkB1T_MKLiyjpe94Qpaw--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/fefd51184abfe4e4a572e8f145358919',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 361,
              url:
                'https://s.yimg.com/uu/api/res/1.2/u3zcIxTDyfPUBt52vsMl0w--~B/Zmk9ZmlsbDtoPTM2MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/1XnkB1T_MKLiyjpe94Qpaw--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/fefd51184abfe4e4a572e8f145358919',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 361,
              url:
                'https://s.yimg.com/uu/api/res/1.2/u3zcIxTDyfPUBt52vsMl0w--~B/Zmk9ZmlsbDtoPTM2MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/1XnkB1T_MKLiyjpe94Qpaw--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/fefd51184abfe4e4a572e8f145358919',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/F33GzEN6o3Ku2dzxAbxJyg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/1XnkB1T_MKLiyjpe94Qpaw--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/fefd51184abfe4e4a572e8f145358919',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 433,
              url:
                'https://s.yimg.com/uu/api/res/1.2/7B6HTPCsN3uL_WAmn8_omw--~B/Zmk9ZmlsbDtoPTQzMzt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/1XnkB1T_MKLiyjpe94Qpaw--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/fefd51184abfe4e4a572e8f145358919',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Lh6tfeS55hBqwhuy.899oA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/1XnkB1T_MKLiyjpe94Qpaw--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/fefd51184abfe4e4a572e8f145358919',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Lh6tfeS55hBqwhuy.899oA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/1XnkB1T_MKLiyjpe94Qpaw--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/fefd51184abfe4e4a572e8f145358919',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/3wvPUZnOV9m2qqEWwizy0w--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/1XnkB1T_MKLiyjpe94Qpaw--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/fefd51184abfe4e4a572e8f145358919',
              tags: null,
            },
          ],
          original_height: 533,
          original_width: 945,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/5Xlt94SIdgvUbXbWGkViJg--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/1XnkB1T_MKLiyjpe94Qpaw--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/fefd51184abfe4e4a572e8f145358919',
        },
        is_magazine: false,
        reference_id: '8fa09f55-9e4a-34fa-8dbd-bd1c08f338e3',
      },
      {
        uuid: '03e0def1-f7f9-3448-8af5-4ffef0b9f98a',
        title:
          'U.S. tech giants face curbs on data sharing, digital marketplaces, under draft EU rules',
        link: 'https://finance.yahoo.com/news/u-tech-giants-face-curbs-115942770.html',
        summary:
          'Alphabet unit Google, Facebook, Amazon, Apple and other U.S. tech giants could be banned from favouring their services or forcing users to sign up to a bundle of services under draft EU rules aimed at reining in their power.  The draft rules, known as the Digital Services Act, aim to set the ground rules for data-sharing and how digital marketplaces operate.  The European Commission is taking a tough line against U.S. tech giants, driven in part by antitrust cases resulting in decisions that subsequently failed to boost competition because of the lengthy process that typically takes several years.',
        publisher: 'Reuters',
        author: 'Foo Yun Chee',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOGL',
            label: 'Alphabet Inc.',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p>By Foo Yun Chee</p> \n<p>BRUSSELS, Sept 30 (Reuters) - Alphabet unit Google, Facebook, Amazon, Apple and other U.S. tech giants could be banned from favouring their services or forcing users to sign up to a bundle of services under draft EU rules aimed at reining in their power.</p> \n<p>The draft rules, known as the Digital Services Act, aim to set the ground rules for data-sharing and how digital marketplaces operate. They are expected to come into force by the end of the year.</p> \n<p>The European Commission is taking a tough line against U.S. tech giants, driven in part by antitrust cases resulting in decisions that subsequently failed to boost competition because of the lengthy process that typically takes several years.</p> \n<p>The case has taken on urgency because of the dependence of thousands of EU companies on the tech giants for their business.</p> \n<p>Gatekeepers, such as companies with bottleneck power or strategic market status, will not be allowed to use data collected on their platforms to target users unless this data is shared with rivals, according to the document seen by Reuters.</p> \n<p>"Gatekeepers shall not pre-install exclusively their own applications nor require from any third party operating system developers or hardware manufacturers to pre-install exclusively gatekeepers\' own application," the paper said.</p> \n<p>Another clause would ban gatekeepers from blocking rivals offering their products to customers outside of the gatekeeper\'s platform or services, a move which would affect Apple and Google with their restrictive app store rules and payment.</p> \n<p>The rules would also subject gatekeepers to annual audits of their advertising metrics and reporting practices. (Reporting by Foo Yun Chee; Editing by Bernadette Baum)</p>',
        streams: [],
        ignore_main_image: false,
        published_at: 1601467182,
        main_image: null,
        is_magazine: false,
        reference_id: '03e0def1-f7f9-3448-8af5-4ffef0b9f98a',
      },
      {
        uuid: '881979ef-070e-36d9-b4d1-f0ea4125c1a9',
        title:
          'Apple CEO Cook awarded stock grants with current valuation of up to $114 million',
        link:
          'https://www.marketwatch.com/story/apple-ceo-cook-awarded-stock-grants-with-current-valuation-of-up-to-114-million-2020-09-30?siteid=yhoof2&yptr=yahoo',
        summary:
          'Apple  said in a Securities and Exchange Commission filing that it will give its chief executive, Tim Cook, stock currently valued at $114 million. The biggest portion of the restricted stock is eligible for distribution on Oct. 1, 2023, and is based on Apple shareholder performance between fiscal 2021 and fiscal 2023. Cook also is due to receive further grants in April 2023, April 2024 and April 2025. Apple stock ended Tuesday down 87 cents to $114.09, but has surged 55% this year.',
        publisher: 'MarketWatch',
        author: 'Steve Goldstein',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601456760,
        main_image: null,
        is_magazine: false,
        reference_id: '881979ef-070e-36d9-b4d1-f0ea4125c1a9',
      },
      {
        uuid: 'f901196b-5601-3fb5-aaed-66f77df4966c',
        title:
          'Apple Key Services Suffer Outage, Following Similar Woes For Google, Microsoft',
        link:
          'https://finance.yahoo.com/news/apple-key-services-suffer-outage-062353156.html',
        summary:
          'Apple Inc (NASDAQ: AAPL) said outages affected multiple services to varying degrees on Tuesday evening.What Happened: The service disruptions affected App Store, Apple Music, Find My, iCloud Backup, and others, according to the company\'s System Status page.The Cupertino-based tech giant said it resolved 25 outages on Tuesday. All users of Apple Care in iOS, Apple School Manager were affected.All services resumed normal operations as of press time, as per Apple System Status.Why It Matters: This week, Alphabet Inc (NASDAQ: GOOGL) (NASDAQ: GOOG) services such as Gmail, YouTube, and Google Meet were also affected in a widespread outage affecting the East Coast.On Monday, Microsoft Corporation (NASDAQ: MSFT) was hit by a multi-hour outage that spanned Outlook, Office 365, and Microsoft Teams, the Verge reported.The snags affecting major tech giants have given rise to conspiracy theories on discussion boards such as Hacker News, with one user commenting, "Jeez, AWS, Azure, Google, and now iCloud. I don\'t generally align myself with conspiracies, but it is very interesting to me that all [four] of these tech giants had severe issues recently."Price Action: Apple shares closed nearly 0.8% lower at $114.09 on Tuesday and gained almost 0.2% in the after-hours session.See more from Benzinga  * Options Trades For This Crazy Market: Get Benzinga Options to Follow High-Conviction Trade Ideas  * Apple CEO Tim Cook Gets First Stock Grant In A Decade Worth Over 4M  * Google Says All App Developers Must Begin Forking Out 30% Play Store Cut Next Year(C) 2020 Benzinga.com. Benzinga does not provide investment advice. All rights reserved.',
        publisher: 'Benzinga',
        author: 'Shivdeep Dhaliwal',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOGL',
            label: 'Alphabet Inc.',
            score: 1,
          },
          {
            term: 'TICKER:MSFT',
            label: 'Microsoft Corporation',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<img src="https://s.yimg.com/uu/api/res/1.2/DU5.Yh3_e4J4Oj.WQ5.SNw--/cT03NTthcHBpZD15dmlkZW9mZWVkczs-/https://media.zenfs.com/en/Benzinga/ff2b702bbe1cd1b4e009250668aedc35" alt="" title="" width="600" height="400" class="imagecache imagecache-600x400xUP"> \n<p><strong>Apple Inc</strong> (NASDAQ: <a class="ticker" href="http://finance.yahoo.com/q?s=AAPL">AAPL</a>) said outages affected multiple services to varying degrees on Tuesday evening.</p> \n<p><strong>What Happened:</strong> The service disruptions affected App Store, Apple Music, Find My, iCloud Backup, and others, <a href="https://www.apple.com/support/systemstatus/">according</a> to the company’s System Status page.</p> \n<p>The Cupertino-based tech giant said it resolved 25 outages on Tuesday. All users of Apple Care in iOS, Apple School Manager were affected.</p> \n<p>All services resumed normal operations as of press time, as per Apple System Status.</p> \n<p><strong>Why It Matters:</strong> This week, <strong>Alphabet Inc</strong> (NASDAQ: <a class="ticker" href="http://finance.yahoo.com/q?s=GOOGL">GOOGL</a>) (NASDAQ: <a class="ticker" href="http://finance.yahoo.com/q?s=GOOG">GOOG</a>) services such as Gmail, YouTube, and Google Meet were also affected in a <a href="https://www.benzinga.com/news/20/09/17651040/google-services-including-gmail-youtube-disrupted-as-servers-crash?utm_campaign=partner_feed&amp;utm_source=yahooFinance&amp;utm_medium=partner_feed&amp;utm_content=site">widespread outage</a> affecting the East Coast.</p> \n<p>On Monday, <strong>Microsoft Corporation</strong> (NASDAQ: <a class="ticker" href="http://finance.yahoo.com/q?s=MSFT">MSFT</a>) was hit by a multi-hour outage that spanned Outlook, Office 365, and Microsoft Teams, the Verge reported.</p> \n<p>The snags affecting major tech giants have given rise to conspiracy theories on discussion boards such as Hacker News, with one user commenting, “Jeez, AWS, Azure, Google, and now iCloud. I don’t generally align myself with conspiracies, but it is very interesting to me that all [four] of these tech giants had severe issues recently.”</p> \n<p><strong>Price Action:</strong> Apple shares closed nearly 0.8% lower at $114.09 on Tuesday and gained almost 0.2% in the after-hours session.</p> \n<p><strong>See more from Benzinga</strong></p>\n<ul>\n <li><a href="https://www.benzinga.com/premium/ideas/benzinga-options/?utm_source=yahoo">Options Trades For This Crazy Market: Get Benzinga Options to Follow High-Conviction Trade Ideas</a></li>\n <li><a href="https://www.benzinga.com/news/20/09/17709732/apple-ceo-tim-cook-gets-first-stock-grant-in-a-decade-worth-over-114m?utm_campaign=partner_feed&amp;utm_source=yahooFinance&amp;utm_medium=partner_feed&amp;utm_content=site">Apple CEO Tim Cook Gets First Stock Grant In A Decade Worth Over 4M</a></li>\n <li><a href="https://www.benzinga.com/news/20/09/17688549/google-says-all-app-developers-must-begin-forking-out-30-play-store-cut-next-year?utm_campaign=partner_feed&amp;utm_source=yahooFinance&amp;utm_medium=partner_feed&amp;utm_content=site">Google Says All App Developers Must Begin Forking Out 30% Play Store Cut Next Year</a></li>\n</ul>\n<p></p>\n<p class="copyright"><i>© 2020 Benzinga.com. Benzinga does not provide investment advice. All rights reserved.</i></p>',
        streams: [],
        ignore_main_image: true,
        published_at: 1601447033,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 600,
              height: 400,
              url:
                'https://s.yimg.com/uu/api/res/1.2/8bf1..IjOsBNEKf63N.Khw--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/bjwVMbRKYrpIZOmSmRrOGQ--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/ff2b702bbe1cd1b4e009250668aedc35',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/gVSACBe78Jlwvsy8Cz2aIA--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/bjwVMbRKYrpIZOmSmRrOGQ--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/ff2b702bbe1cd1b4e009250668aedc35',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 213,
              url:
                'https://s.yimg.com/uu/api/res/1.2/GCOaKULK.WjiNXGgnM.G4Q--~B/Zmk9ZmlsbDtoPTIxMzt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/bjwVMbRKYrpIZOmSmRrOGQ--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/ff2b702bbe1cd1b4e009250668aedc35',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/WwteTlmwqevY_dWsAgdUbg--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/bjwVMbRKYrpIZOmSmRrOGQ--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/ff2b702bbe1cd1b4e009250668aedc35',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/WwteTlmwqevY_dWsAgdUbg--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/bjwVMbRKYrpIZOmSmRrOGQ--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/ff2b702bbe1cd1b4e009250668aedc35',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 107,
              url:
                'https://s.yimg.com/uu/api/res/1.2/RWaMhBa3IbJ6nQxR2KQb5A--~B/Zmk9ZmlsbDtoPTEwNzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/bjwVMbRKYrpIZOmSmRrOGQ--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/ff2b702bbe1cd1b4e009250668aedc35',
              tags: null,
            },
          ],
          original_height: 400,
          original_width: 600,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/8bf1..IjOsBNEKf63N.Khw--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/bjwVMbRKYrpIZOmSmRrOGQ--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/ff2b702bbe1cd1b4e009250668aedc35',
        },
        is_magazine: false,
        reference_id: 'f901196b-5601-3fb5-aaed-66f77df4966c',
      },
      {
        uuid: '072a50d9-d461-343a-aef2-371788015427',
        title: 'Apple CEO Tim Cook Gets First Stock Grant In A Decade Worth Over $114M',
        link: 'https://finance.yahoo.com/news/apple-ceo-tim-cook-gets-024443776.html',
        summary:
          "Apple Inc (NASDAQ: AAPL) CEO Tim Cook has received a stock bonus, worth nearly $114 million as of Apple's Tuesday closing price, in recognition of his work at the tech giant.What Happened: The Cupertino-based tech giant granted 333,987 restricted stock units to Cook in a transaction dated Sept. 27, or about $38 million, a filing with the United States Securities and Exchange Commission indicates. One-third of the grant will vest each subsequent year on April 1, beginning in 2023 until 2025, as per the filing.  Each restricted stock on settlement gives Cook the right to receive one common share of Apple.\"For the first time in nearly a decade, we are awarding Tim a new stock grant that will vest over time in recognition of his outstanding leadership and with great optimism for Apple's future as he carries these efforts forward,\" Apple's board of directors told Reuters in a statement.  Why It Matters: This is the 59-year old's first stock grant since 2011 and there's a possibility for him to earn another 667,974 stock units should he meet performance targets, Reuters reported.In Oct. 2023, Cook will again become eligible to receive an award of 333,987 stock units based on his performance, Reuters noted.The performance is reportedly metered on Apple's relative total shareholder returns between fiscal years 2021 to 2023.On Tuesday, Apple also granted Chief Operating Officer Jeff Williams 89,064 restricted stock units on terms similar to Cook's, as per Reuters.Last month, Cook became a billionaire as Apple's stock neared $2 trillion in valuation. Cook's ownership of Apple stock has been incremental unlike Facebook Inc (NASDAQ: FB) CEO Mark Zuckerberg and Tesla Inc (NASDAQ: TSLA) CEO Elon Musk, both of which own large chunks of their respective companies.Price Action: Apple shares closed nearly 0.8% lower at $114.09 on Monday and gained almost 0.2% in the after-hours session.Photo by Joao-Pierre Ruth via FlickrSee more from Benzinga  * Options Trades For This Crazy Market: Get Benzinga Options to Follow High-Conviction Trade Ideas  * Google Says All App Developers Must Begin Forking Out 30% Play Store Cut Next Year  * Tesla Chinese Rivals Not Losing Sleep Over Planned K Electric Vehicle(C) 2020 Benzinga.com. Benzinga does not provide investment advice. All rights reserved.",
        publisher: 'Benzinga',
        author: 'Shivdeep Dhaliwal',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<img src="https://s1.yimg.com/uu/api/res/1.2/6k1IuvYwEZ7CgIeYDNq8IA--/cT03NTthcHBpZD15dmlkZW9mZWVkczs-/https://media.zenfs.com/en/Benzinga/da1df2e7266a8e4b1ccd4563c6ddb545" alt="" title="" width="600" height="400" class="imagecache imagecache-600x400xUP"> \n<p><strong>Apple Inc </strong>(NASDAQ: <a class="ticker" href="http://finance.yahoo.com/q?s=AAPL">AAPL</a>) CEO Tim Cook has received a stock bonus, worth nearly $114&nbsp;million as of Apple\'s Tuesday closing price,&nbsp;in recognition of his work at the tech giant.</p> \n<p><strong>What Happened:</strong> The Cupertino-based tech giant granted 333,987 restricted stock units to Cook in a transaction dated Sept. 27, or about $38 million,&nbsp;a <a href="https://www.sec.gov/Archives/edgar/data/320193/000032019320000074/xslF345X03/wf-form4_160141879027128.xml">filing</a> with the United States Securities and Exchange Commission indicates.&nbsp;</p> \n<p>One-third of the grant will vest each subsequent year on April 1, beginning in 2023 until 2025, as per the filing.&nbsp; Each restricted stock on settlement gives Cook the right to receive one common share of Apple.</p> \n<p>“For the first time in nearly a decade, we are awarding Tim a new stock grant that will vest over time in recognition of his outstanding leadership and with great optimism for Apple’s future as he carries these efforts forward,” Apple’s board of directors told Reuters in a statement.<br> <strong>Why It Matters:&nbsp;</strong>This is the 59-year old\'s first stock grant since 2011 and there\'s a possibility for him to&nbsp;earn another 667,974 stock units should he meet performance targets, Reuters <a href="https://www.reuters.com/article/us-apple-cook/apple-grants-ceo-tim-cook-first-major-stock-package-since-2011-idUSKBN26K3S2?il=0" style="font-size:13px;">reported</a>.</p> \n<p>In Oct. 2023, Cook will again become eligible to receive an award of 333,987 stock units&nbsp;based on his performance, Reuters noted.</p> \n<p>The performance is reportedly metered on Apple’s relative total shareholder returns between fiscal years 2021 to 2023.</p> \n<p>On Tuesday, Apple also granted&nbsp;Chief Operating Officer Jeff Williams 89,064 restricted stock units on terms similar to Cook\'s, as per Reuters.</p> \n<p>Last month, Cook became a <a href="https://www.benzinga.com/news/20/08/17025176/tim-cook-now-a-billionaire-as-apple-nears-2t-valuation?utm_campaign=partner_feed&amp;utm_source=yahooFinance&amp;utm_medium=partner_feed&amp;utm_content=site">billionaire</a> as Apple’s stock neared $2 trillion in valuation.&nbsp;</p> \n<p>Cook’s ownership of Apple stock has been incremental unlike <strong>Facebook Inc</strong> (NASDAQ: <a class="ticker" href="http://finance.yahoo.com/q?s=FB">FB</a>) CEO Mark Zuckerberg and <strong>Tesla Inc</strong> (NASDAQ: <a class="ticker" href="http://finance.yahoo.com/q?s=TSLA">TSLA</a>) CEO Elon Musk, both of which own large chunks of their respective companies.</p> \n<p><strong>Price Action:</strong> Apple shares closed nearly 0.8% lower at $114.09 on Monday and gained almost 0.2% in the after-hours session.</p> \n<p><em>Photo by Joao-Pierre Ruth via Flickr</em></p> \n<p><strong>See more from Benzinga</strong></p>\n<ul>\n <li><a href="https://www.benzinga.com/premium/ideas/benzinga-options/?utm_source=yahoo">Options Trades For This Crazy Market: Get Benzinga Options to Follow High-Conviction Trade Ideas</a></li>\n <li><a href="https://www.benzinga.com/news/20/09/17688549/google-says-all-app-developers-must-begin-forking-out-30-play-store-cut-next-year?utm_campaign=partner_feed&amp;utm_source=yahooFinance&amp;utm_medium=partner_feed&amp;utm_content=site">Google Says All App Developers Must Begin Forking Out 30% Play Store Cut Next Year</a></li>\n <li><a href="https://www.benzinga.com/news/20/09/17672963/tesla-chinese-rivals-not-losing-sleep-over-planned-25k-electric-vehicle?utm_campaign=partner_feed&amp;utm_source=yahooFinance&amp;utm_medium=partner_feed&amp;utm_content=site">Tesla Chinese Rivals Not Losing Sleep Over Planned K Electric Vehicle</a></li>\n</ul>\n<p></p>\n<p class="copyright"><i>© 2020 Benzinga.com. Benzinga does not provide investment advice. All rights reserved.</i></p>',
        streams: [],
        ignore_main_image: true,
        published_at: 1601433883,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 600,
              height: 400,
              url:
                'https://s.yimg.com/uu/api/res/1.2/pPjzIJuGIGIOt2wdhqsYag--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/FJtHR2WOBLmRHmB0fq.h9Q--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/da1df2e7266a8e4b1ccd4563c6ddb545',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Fhn3Z_ExTSs.up.X9xkFYA--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/FJtHR2WOBLmRHmB0fq.h9Q--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/da1df2e7266a8e4b1ccd4563c6ddb545',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 213,
              url:
                'https://s.yimg.com/uu/api/res/1.2/AO1gARfOxRftPSeKowa4XA--~B/Zmk9ZmlsbDtoPTIxMzt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/FJtHR2WOBLmRHmB0fq.h9Q--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/da1df2e7266a8e4b1ccd4563c6ddb545',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/G2PSFvTbNc9gAMgMFVqdGA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/FJtHR2WOBLmRHmB0fq.h9Q--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/da1df2e7266a8e4b1ccd4563c6ddb545',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/G2PSFvTbNc9gAMgMFVqdGA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/FJtHR2WOBLmRHmB0fq.h9Q--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/da1df2e7266a8e4b1ccd4563c6ddb545',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 107,
              url:
                'https://s.yimg.com/uu/api/res/1.2/aaoaV.FiBuV0ZwTCwcYzEA--~B/Zmk9ZmlsbDtoPTEwNzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/FJtHR2WOBLmRHmB0fq.h9Q--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/da1df2e7266a8e4b1ccd4563c6ddb545',
              tags: null,
            },
          ],
          original_height: 400,
          original_width: 600,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/pPjzIJuGIGIOt2wdhqsYag--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/FJtHR2WOBLmRHmB0fq.h9Q--~B/aD00MDA7dz02MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/Benzinga/da1df2e7266a8e4b1ccd4563c6ddb545',
        },
        is_magazine: false,
        reference_id: '072a50d9-d461-343a-aef2-371788015427',
      },
      {
        uuid: '49b03812-098d-31ae-aa9c-6f07d5bcde0d',
        title: 'Apple grants CEO Tim Cook first major stock package since 2011',
        link:
          'https://in.finance.yahoo.com/news/apple-grants-ceo-tim-cook-021505334.html',
        summary:
          '“Tim has brought unparalleled innovation and focus to his role as CEO and demonstrated what it means to lead with values and integrity," Apple\'s board of directors said in a statement.  "For the first time in nearly a decade, we are awarding Tim a new stock grant that will vest over time in recognition of his outstanding leadership and with great optimism for Apple’s future as he carries these efforts forward.”  Cook is in the ninth year of his 10-year grant from 2011.',
        publisher: 'Reuters',
        author: 'Stephen Nellis',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: false,
        content:
          "<p>By Stephen Nellis</p> \n<p>(Reuters) - Apple Inc on Tuesday granted CEO Tim Cook 333,987 restricted stock units, with a possibility to earn as many as 667,974 more if he hits performance targets, in the executive's first stock grant since 2011. </p> \n<p>“Tim has brought unparalleled innovation and focus to his role as CEO and demonstrated what it means to lead with values and integrity,\" Apple's board of directors said in a statement.</p> \n<p>\"For the first time in nearly a decade, we are awarding Tim a new stock grant that will vest over time in recognition of his outstanding leadership and with great optimism for Apple’s future as he carries these efforts forward.”</p> \n<p>Cook is in the ninth year of his 10-year grant from 2011. Each restricted stock unit conveys the right to one common share when it vests. </p> \n<p>Apple's stock closed at $114.09 on Tuesday, which puts the value of the units at $38.1 million at Tuesday's price. But they will be more valuable if Apple's stock price rises by the time they vest. One-third of the units will vest on April 1, 2023 with another third vesting in 2024 and the final third in 2025.</p> \n<p>In October 2023, Cook will also be eligible to receive additional units based on performance. The target amount is 333,987 units, but the total could vary between none and double that amount based on Apple's relative total shareholder return from fiscal years 2021 through 2023, according to a regulatory filing.</p> \n<p>Apple's move brings Cook's compensation timeline into line with other executives at the company. Apple on Tuesday also awarded a similar grant to Chief Operating Office Jeff Williams, who will receive 89,064 restricted stock units on the same terms as Cook, including the possibility of performance-based units.</p> \n<p>Cook told Fortune magazine in 2015 that he plans to donate his wealth to charity. </p> \n<p> </p>\n<p> (Reporting by Stephen Nellis in San Francisco; Editing by Leslie Adler and Cynthia Osterman)</p>",
        streams: [],
        ignore_main_image: false,
        published_at: 1601432105,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 800,
              height: 450,
              url:
                'https://s.yimg.com/uu/api/res/1.2/9rBXqGeVnW_6iZMAI.bJWA--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/kCdVukArr5xkZmNlYqZ7dw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters.com/d3d5ca84217b2d9541ad683f67c61c19',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/UhHk3xkmGuw3qUHQv1FD4g--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/kCdVukArr5xkZmNlYqZ7dw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters.com/d3d5ca84217b2d9541ad683f67c61c19',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/o_Gu4mL.IaxzgemHRUrJjg--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/kCdVukArr5xkZmNlYqZ7dw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters.com/d3d5ca84217b2d9541ad683f67c61c19',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/eGYPcpKbaLUqZ2hAu1jZtA--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/kCdVukArr5xkZmNlYqZ7dw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters.com/d3d5ca84217b2d9541ad683f67c61c19',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/lQrwAtbQxOeZtlt1.xhT5A--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/kCdVukArr5xkZmNlYqZ7dw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters.com/d3d5ca84217b2d9541ad683f67c61c19',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/lQrwAtbQxOeZtlt1.xhT5A--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/kCdVukArr5xkZmNlYqZ7dw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters.com/d3d5ca84217b2d9541ad683f67c61c19',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/hKC7Hj3tsMORil5qjW5M7Q--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/kCdVukArr5xkZmNlYqZ7dw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters.com/d3d5ca84217b2d9541ad683f67c61c19',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 432,
              url:
                'https://s.yimg.com/uu/api/res/1.2/qpFmY9VqYaYN7JI1uuUPTg--~B/Zmk9ZmlsbDtoPTQzMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/kCdVukArr5xkZmNlYqZ7dw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters.com/d3d5ca84217b2d9541ad683f67c61c19',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/qQeMdhQuggnNd0g0ciw2TQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/kCdVukArr5xkZmNlYqZ7dw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters.com/d3d5ca84217b2d9541ad683f67c61c19',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/qQeMdhQuggnNd0g0ciw2TQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/kCdVukArr5xkZmNlYqZ7dw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters.com/d3d5ca84217b2d9541ad683f67c61c19',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/C17SLkYd17C4S5n_w_YJ_w--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/kCdVukArr5xkZmNlYqZ7dw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters.com/d3d5ca84217b2d9541ad683f67c61c19',
              tags: null,
            },
          ],
          original_height: 450,
          original_width: 800,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/9rBXqGeVnW_6iZMAI.bJWA--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/kCdVukArr5xkZmNlYqZ7dw--~B/aD00NTA7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters.com/d3d5ca84217b2d9541ad683f67c61c19',
        },
        is_magazine: false,
        reference_id: '49b03812-098d-31ae-aa9c-6f07d5bcde0d',
      },
      {
        uuid: '26ae5696-d75f-329b-8428-6d4fac0e32d5',
        title: 'Apple Gives Tim Cook Up to a Million Shares That Vest Through 2025',
        link:
          'https://finance.yahoo.com/news/apple-gives-tim-cook-million-003324177.html',
        summary:
          '(Bloomberg) -- Apple Inc. said it is giving Chief Executive Officer Tim Cook new equity awards that could provide him with as many as 1 million shares by 2025.The compensation, currently worth $76 million to $114 million depending on Apple’s share performance, gives Cook a new reason to keep running the world’s largest technology company.The equity comes in two packages, according to a regulatory filing on Tuesday. The first comprises 333,987 restricted stock units that vest in thirds on April 1 in 2023, 2024 and 2025. The other has 333,987 units that will vest Oct. 1, 2023 and is based on Apple’s relative share performance over three years. Cook may get none of this award or 200%, depending on stock returns. If all goes well, Cook would get about 1 million shares in total.“Tim has brought unparalleled innovation and focus to his role as CEO and demonstrated what it means to lead with values and integrity,” Apple’s board said in a statement. “For the first time in nearly a decade, we are awarding Tim a new stock grant that will vest over time in recognition of his outstanding leadership and with great optimism for Apple’s future as he carries these efforts forward.”Apple shares have soared in recent years as Cook helped the company churn out new iPhones, Watches, AirPods and digital services, while fending off the impact of a U.S.-China trade war and a global pandemic. The executive became a billionaire earlier this year, but he has been giving away some of that wealth.Read more: Tim Cook Hits Billionaire Status With Apple Nearing $2 TrillionThe new packages mark the first equity awards issued to Cook since he was named CEO in 2011. Cook, 59, has given no indication he plans to step down, but succession planning has been a major point of discussion in recent Apple board and executive team meetings, Bloomberg has reported.A few weeks ago, Cook was asked how long he foresees running the Cupertino, California-technology giant. “We’ll see,” he said. “At some point, of course, we all do something different.”Read more: Apple’s Rising Class of Leaders Will Shape a Post-Tim Cook EraApple Chief Operating Officer Jeff Williams, Chief Financial Officer Luca Maestri and General Counsel Kate Adams were also granted new equity awards on the same time schedule and terms as Cook. Those other executives got smaller packages though.For more articles like this, please visit us at bloomberg.comSubscribe now to stay ahead with the most trusted business news source.©2020 Bloomberg L.P.',
        publisher: 'Bloomberg',
        author: 'Mark Gurman',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p>(Bloomberg) -- Apple Inc. said it is giving Chief Executive Officer Tim Cook new equity awards that could provide him with as many as 1 million shares by 2025.</p>\n<p>The compensation, currently worth $76 million to $114 million depending on Apple’s share performance, gives Cook a new reason to keep running the world’s largest technology company.</p>\n<p>The equity comes in two packages, according to a regulatory filing on Tuesday. The first comprises 333,987 restricted stock units that vest in thirds on April 1 in 2023, 2024 and 2025. The other has 333,987 units that will vest Oct. 1, 2023 and is based on Apple’s relative share performance over three years. Cook may get none of this award or 200%, depending on stock returns. If all goes well, Cook would get about 1 million shares in total.</p>\n<p>“Tim has brought unparalleled innovation and focus to his role as CEO and demonstrated what it means to lead with values and integrity,” Apple’s board said in a statement. “For the first time in nearly a decade, we are awarding Tim a new stock grant that will vest over time in recognition of his outstanding leadership and with great optimism for Apple’s future as he carries these efforts forward.”</p>\n<p>Apple shares have soared in recent years as Cook helped the company churn out new iPhones, Watches, AirPods and digital services, while fending off the impact of a U.S.-China trade war and a global pandemic. The executive became a billionaire earlier this year, but he has been giving away some of that wealth.</p>\n<p>Read more: Tim Cook Hits Billionaire Status With Apple Nearing $2 Trillion</p>\n<p>The new packages mark the first equity awards issued to Cook since he was named CEO in 2011. Cook, 59, has given no indication he plans to step down, but succession planning has been a major point of discussion in recent Apple board and executive team meetings, Bloomberg has reported.</p>\n<p>A few weeks ago, Cook was asked how long he foresees running the Cupertino, California-technology giant. “We’ll see,” he said. “At some point, of course, we all do something different.”</p>\n<p>Read more: Apple’s Rising Class of Leaders Will Shape a Post-Tim Cook Era</p>\n<p>Apple Chief Operating Officer Jeff Williams, Chief Financial Officer Luca Maestri and General Counsel Kate Adams were also granted new equity awards on the same time schedule and terms as Cook. Those other executives got smaller packages though.</p>\n<p>For more articles like this, please visit us at <a href="https://www.bloomberg.com">bloomberg.com</a></p>\n<p><a href="https://www.bloomberg.com/subscriptions/67obqkd5zdp5lj8/?utm_source=yahoo_usn">Subscribe now</a> to stay ahead with the most trusted business news source.</p>\n<p>©2020 Bloomberg L.P.</p>',
        streams: [],
        ignore_main_image: false,
        published_at: 1601426004,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 2000,
              height: 1334,
              url:
                'https://s.yimg.com/uu/api/res/1.2/rUmuy04dPHIHrQmfMGBQvQ--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/..GvdSe775q85ydKpuRreA--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait_retina',
              width: 1536,
              height: 1025,
              url:
                'https://s.yimg.com/uu/api/res/1.2/XCeo_v5iYWSAcuGXBug4IA--~B/Zmk9ZmlsbDtoPTEwMjU7dz0xNTM2O2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 213,
              url:
                'https://s.yimg.com/uu/api/res/1.2/7GCR8ITR5dCSLRXR3BP2Rg--~B/Zmk9ZmlsbDtoPTIxMzt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/JRfiThLSsij41bt2c6naVQ--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/7jgZCWcfinQTEnEMUT2EUQ--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/7jgZCWcfinQTEnEMUT2EUQ--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/VZjbF.pKCcfnfh8izthw9g--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 512,
              url:
                'https://s.yimg.com/uu/api/res/1.2/JbBAdwJIWMP.J57IsKq1_Q--~B/Zmk9ZmlsbDtoPTUxMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/vjbLwvdJgsXKojrIDuX28w--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/vjbLwvdJgsXKojrIDuX28w--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 107,
              url:
                'https://s.yimg.com/uu/api/res/1.2/kTKoYiEj_YMowBuwo_L.Yg--~B/Zmk9ZmlsbDtoPTEwNzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
              tags: null,
            },
          ],
          original_height: 1334,
          original_width: 2000,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/rUmuy04dPHIHrQmfMGBQvQ--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/rEwhFgjJzBGA9fKU.CvNlg--~B/aD0xMzM0O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/529396ac30ef2294e61904acfe865497',
        },
        is_magazine: false,
        reference_id: '26ae5696-d75f-329b-8428-6d4fac0e32d5',
      },
      {
        uuid: '3d7760e0-2a80-307c-9f4a-7469d30b1ff9',
        title: 'Apple and Epic Games Want to Fight Antitrust Case Without a Jury',
        link: 'https://finance.yahoo.com/news/apple-epic-games-want-fight-003140941.html',
        summary:
          '(Bloomberg) -- Apple Inc. and Epic Games Inc. told the judge overseeing their antitrust standoff that they don’t want the case tried before a jury and that they prefer the judge to decide it herself.The game developer and the iPhone maker filed a joint statement Tuesday with U.S. District Judge Yvonne Gonzalez Rogers in Oakland, California, saying that Apple is withdrawing the demand for a jury trial it made when it filed its counterclaims.The judge had suggested at a hearing Monday that a jury trial would be preferable because jury verdicts are less likely to get overturned on appeal and because it might be better to test the companies’ arguments, whether Apple operates an illegal monopoly in its app store, before ordinary people.Epic, the maker of Fortnite, claims Apple violates antitrust law by forcing developers to provide mobile apps only through Apple’s app store and by preventing users from paying developers directly for in-game purchases.Instead, gamers must use Apple’s payment system and Apple collects 30% of the purchase price. Apple has argued that there’s no illegal monopoly because Fortnite is available on many other platforms and its control over which apps get put on iPhones and iPads is needed to safeguard the devices’ security.Apple barred Epic Games from the app store after the developer smuggled a “hotfix” into Fortnite to let users bypass the Apple payment function. The judge is weighing whether to force Apple to put Fortnite back in the app store, with Epic’s direct payment option, while the antitrust claims are fought out.Behind the Apple Versus Fortnite App Store Battle: QuickTakeFor more articles like this, please visit us at bloomberg.comSubscribe now to stay ahead with the most trusted business news source.©2020 Bloomberg L.P.',
        publisher: 'Bloomberg',
        author: 'Edvard Pettersson',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p>(Bloomberg) -- Apple Inc. and Epic Games Inc. told the judge overseeing their antitrust standoff that they don’t want the case tried before a jury and that they prefer the judge to decide it herself.</p>\n<p>The game developer and the iPhone maker filed a joint statement Tuesday with U.S. District Judge Yvonne Gonzalez Rogers in Oakland, California, saying that Apple is withdrawing the demand for a jury trial it made when it filed its counterclaims.</p>\n<p>The judge had suggested at a hearing Monday that a jury trial would be preferable because jury verdicts are less likely to get overturned on appeal and because it might be better to test the companies’ arguments, whether Apple operates an illegal monopoly in its app store, before ordinary people.</p>\n<p>Epic, the maker of Fortnite, claims Apple violates antitrust law by forcing developers to provide mobile apps only through Apple’s app store and by preventing users from paying developers directly for in-game purchases.</p>\n<p>Instead, gamers must use Apple’s payment system and Apple collects 30% of the purchase price. Apple has argued that there’s no illegal monopoly because Fortnite is available on many other platforms and its control over which apps get put on iPhones and iPads is needed to safeguard the devices’ security.</p>\n<p>Apple barred Epic Games from the app store after the developer smuggled a “hotfix” into Fortnite to let users bypass the Apple payment function. The judge is weighing whether to force Apple to put Fortnite back in the app store, with Epic’s direct payment option, while the antitrust claims are fought out.</p>\n<p>Behind the Apple Versus Fortnite App Store Battle: QuickTake</p>\n<p>For more articles like this, please visit us at <a href="https://www.bloomberg.com">bloomberg.com</a></p>\n<p><a href="https://www.bloomberg.com/subscriptions/67obqkd5zdp5lj8/?utm_source=yahoo_usn">Subscribe now</a> to stay ahead with the most trusted business news source.</p>\n<p>©2020 Bloomberg L.P.</p>',
        streams: [],
        ignore_main_image: false,
        published_at: 1601425900,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1999,
              height: 1333,
              url:
                'https://s.yimg.com/uu/api/res/1.2/p1VeyoUE_fSfioaXZe97CQ--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/lsyO2wziede7jGZjp3G2Nw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait_retina',
              width: 1536,
              height: 1024,
              url:
                'https://s.yimg.com/uu/api/res/1.2/zYVc44OS4YCn16fAqj4WYA--~B/Zmk9ZmlsbDtoPTEwMjQ7dz0xNTM2O2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 213,
              url:
                'https://s.yimg.com/uu/api/res/1.2/wmqXEiK.Q6NSV3NEErwJXA--~B/Zmk9ZmlsbDtoPTIxMzt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Ip4oxL87czoQTeSjjAxF1A--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/LLx6xOp8C9nmybzRrumfjQ--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/LLx6xOp8C9nmybzRrumfjQ--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/eohiZx1MTzEdQKk0Cos6rQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 512,
              url:
                'https://s.yimg.com/uu/api/res/1.2/v3VL5wb0YskieUXyVYrx4Q--~B/Zmk9ZmlsbDtoPTUxMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/2OKvax3D8V3tN.ZmHJrznA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/2OKvax3D8V3tN.ZmHJrznA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 107,
              url:
                'https://s.yimg.com/uu/api/res/1.2/pe7zcV0oS3vOmMCaRIHvhw--~B/Zmk9ZmlsbDtoPTEwNzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
              tags: null,
            },
          ],
          original_height: 1333,
          original_width: 1999,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/p1VeyoUE_fSfioaXZe97CQ--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/N7rNfkKeCS59VNKDdIZocA--~B/aD0xMzMzO3c9MTk5OTthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/722e2b6a5b3513aa573a3d272cbb536d',
        },
        is_magazine: false,
        reference_id: '3d7760e0-2a80-307c-9f4a-7469d30b1ff9',
      },
      {
        uuid: '18fbbf7c-0260-3c2d-8a88-0e3c3a9254fb',
        title: 'Apple CEO Tim Cook Scores First Major Stock Grant Since 2011',
        link:
          'https://www.thestreet.com/investing/apple-ceo-tim-cook-scores-first-major-stock-grant-since-2011?puc=yahoo&cm_ven=YAHOO&yptr=yahoo',
        summary:
          'The restricted stock grants fully vest in 2025, incentivizing Cook to remain as CEO until at least that time.',
        publisher: 'TheStreet.com',
        author: '',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601425680,
        main_image: null,
        is_magazine: false,
        reference_id: '18fbbf7c-0260-3c2d-8a88-0e3c3a9254fb',
      },
      {
        uuid: '0a8cb462-d55d-36bf-a8db-54f0f192f753',
        title: 'Stock-Split Fever Cools as Stock Markets Sink Slightly',
        link:
          'https://www.fool.com/investing/2020/09/29/stock-split-fever-cools-as-stock-markets-sink-slig/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          "Investors didn't react to a stock split announcement in the usual way Tuesday. That's probably a good thing.",
        publisher: 'Motley Fool',
        author: 'Dan Caplinger, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:MKC-V',
            label: 'McCormick & Company, Incorporat',
            score: 1,
          },
          {
            term: 'TICKER:TSLA',
            label: 'Tesla, Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601415480,
        main_image: null,
        is_magazine: false,
        reference_id: '0a8cb462-d55d-36bf-a8db-54f0f192f753',
      },
      {
        uuid: '9ef2f999-3266-3fc7-9b52-95479c54a768',
        title: 'Apple Inc. stock falls Tuesday, underperforms market',
        link:
          'https://www.marketwatch.com/story/apple-inc-stock-falls-tuesday-underperforms-market-01601411130?siteid=yhoof2&yptr=yahoo',
        summary:
          'COMPANY CLOSE UPDATES  Terrence Horan Shares of Apple Inc. AAPL dropped 0.76% to $114.09 Tuesday, on what proved to be an all-around rough trading session for the stock market, with the NASDAQ Composite Index COMP falling 0.',
        publisher: 'MarketWatch',
        author: 'MarketWatch Automation',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601411100,
        main_image: null,
        is_magazine: false,
        reference_id: '9ef2f999-3266-3fc7-9b52-95479c54a768',
      },
      {
        uuid: '1bb3b174-d62b-3536-8eca-06e33b33a658',
        title: 'Apple Accused of Delaying Masimo Legal Fight to Gain Watch Sales',
        link:
          'https://finance.yahoo.com/news/apple-accused-delaying-masimo-legal-172004969.html',
        summary:
          '(Bloomberg) -- Apple Inc. is trying to delay a legal fight over allegedly stolen blood-oxygen monitoring technology in its latest watch so it can gain a more dominant share of the smartwatch market, medical-sensor maker Masimo Corp. said in a court filing late Monday.Blood-oxygen monitoring is a key feature of the latest Apple Watch Series 6 announced on Sept. 15. Masimo and its spinoff Cercacor Laboratories Inc. had sued in January, accusing Apple of promising a working relationship only to steal secret information and hire away key employees, including Cercacor’s former chief technology officer and Masimo’s chief medical officer.Cupertino, California-based Apple hasn’t formally responded to the allegations. Instead, it has filed requests to dismiss the trade-secret part of the case and earlier this month lodged petitions to have Masimo patents invalidated at the U.S. Patent and Trademark Office. Apple wants the trial court in Santa Ana, California, to keep the civil suit on hold until those issues are resolved.Postponing the case “would allow Apple to seize on a critical window of opportunity to capture an emerging field,” Masimo said in the filing Monday. “Just as it has done in numerous other markets, Apple seeks to use its considerable resources and ecosystem to capture the market without regard” to Masimo’s patents, the sensor-maker said.Irvine, California-based Masimo said it sells a variety of monitors and fears Apple will use its power to stifle competition.“I have seen reports from consumers and others suggesting that the Series 6 be used as a medical product,” Masimo Chief Executive Joe Kiani said in the filing. “Not only will that harm consumers themselves, it will also reduce our opportunities to sell truly clinical-grade products to consumers.”Masimo claims Apple deflected earlier requests for information on whether the Watch Series 6 would have blood oxygen monitors. Apple dismissed speculation about the feature as “Internet rumors” and claimed the two sides weren’t in competition, Masimo said.Officials with Apple didn’t immediately respond to requests for comment.Apple on Sept. 15 said delaying the patent aspect of the case while a review board considers its invalidity arguments might help narrow the issues for the court and “will undoubtedly reduce wasted resources.”District Judge James Selna has set a series of dates that would mean the first hearing on how to interpret key terms of the patents will be held in April, unless he puts the case on hold before then.The case is Masimo Corp. v Apple Inc., 20cv48, U.S. District Court for the Central District of California (Santa Ana)For more articles like this, please visit us at bloomberg.comSubscribe now to stay ahead with the most trusted business news source.©2020 Bloomberg L.P.',
        publisher: 'Bloomberg',
        author: 'Susan Decker',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:MASI',
            label: 'Masimo Corporation',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p>(Bloomberg) -- Apple Inc. is trying to delay a legal fight over allegedly stolen blood-oxygen monitoring technology in its latest watch so it can gain a more dominant share of the smartwatch market, medical-sensor maker Masimo Corp. said in a court filing late Monday.</p>\n<p>Blood-oxygen monitoring is a key feature of the latest Apple Watch Series 6 announced on Sept. 15. Masimo and its spinoff Cercacor Laboratories Inc. had sued in January, accusing Apple of promising a working relationship only to steal secret information and hire away key employees, including Cercacor’s former chief technology officer and Masimo’s chief medical officer.</p>\n<p>Cupertino, California-based Apple hasn’t formally responded to the allegations. Instead, it has filed requests to dismiss the trade-secret part of the case and earlier this month lodged petitions to have Masimo patents invalidated at the U.S. Patent and Trademark Office. Apple wants the trial court in Santa Ana, California, to keep the civil suit on hold until those issues are resolved.</p>\n<p>Postponing the case “would allow Apple to seize on a critical window of opportunity to capture an emerging field,” Masimo said in the filing Monday. “Just as it has done in numerous other markets, Apple seeks to use its considerable resources and ecosystem to capture the market without regard” to Masimo’s patents, the sensor-maker said.</p>\n<p>Irvine, California-based Masimo said it sells a variety of monitors and fears Apple will use its power to stifle competition.</p>\n<p>“I have seen reports from consumers and others suggesting that the Series 6 be used as a medical product,” Masimo Chief Executive Joe Kiani said in the filing. “Not only will that harm consumers themselves, it will also reduce our opportunities to sell truly clinical-grade products to consumers.”</p>\n<p>Masimo claims Apple deflected earlier requests for information on whether the Watch Series 6 would have blood oxygen monitors. Apple dismissed speculation about the feature as “Internet rumors” and claimed the two sides weren’t in competition, Masimo said.Officials with Apple didn’t immediately respond to requests for comment.</p>\n<p>Apple on Sept. 15 said delaying the patent aspect of the case while a review board considers its invalidity arguments might help narrow the issues for the court and “will undoubtedly reduce wasted resources.”</p>\n<p>District Judge James Selna has set a series of dates that would mean the first hearing on how to interpret key terms of the patents will be held in April, unless he puts the case on hold before then.</p>\n<p>The case is Masimo Corp. v Apple Inc., 20cv48, U.S. District Court for the Central District of California (Santa Ana)</p>\n<p>For more articles like this, please visit us at <a href="https://www.bloomberg.com">bloomberg.com</a></p>\n<p><a href="https://www.bloomberg.com/subscriptions/67obqkd5zdp5lj8/?utm_source=yahoo_usn">Subscribe now</a> to stay ahead with the most trusted business news source.</p>\n<p>©2020 Bloomberg L.P.</p>',
        streams: [],
        ignore_main_image: false,
        published_at: 1601400004,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 4000,
              height: 2667,
              url:
                'https://s.yimg.com/uu/api/res/1.2/FtOojV2ovzc7cnjjqgrTjg--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/vGzA9j5YCZNjrFU0QokHvQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait_retina',
              width: 1536,
              height: 1024,
              url:
                'https://s.yimg.com/uu/api/res/1.2/hCbBGJUaZcQGghDUpwFOnw--~B/Zmk9ZmlsbDtoPTEwMjQ7dz0xNTM2O2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 213,
              url:
                'https://s.yimg.com/uu/api/res/1.2/SWws_hp2yXe_Wzq9HEN3ag--~B/Zmk9ZmlsbDtoPTIxMzt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/mlxgHDdyqxuaUOBLGz7g5Q--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/0f5fCpoStn2VE58B0cNL4g--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/0f5fCpoStn2VE58B0cNL4g--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/wm96MA1EVWVzNYtFeOPwlQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 512,
              url:
                'https://s.yimg.com/uu/api/res/1.2/WG2WQf4jq28p1u8vImYwpA--~B/Zmk9ZmlsbDtoPTUxMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/O1cSPBypVzkmfBVd3LpvbQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/O1cSPBypVzkmfBVd3LpvbQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 107,
              url:
                'https://s.yimg.com/uu/api/res/1.2/wyh1XizQtkKZrfyBhHPI1g--~B/Zmk9ZmlsbDtoPTEwNzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
              tags: null,
            },
          ],
          original_height: 2667,
          original_width: 4000,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/FtOojV2ovzc7cnjjqgrTjg--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/mh__AaJYQGqwW9mu8a0Mnw--~B/aD0yNjY3O3c9NDAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/91f4e08183ed9da77aa9c4bcdb779a1c',
        },
        is_magazine: false,
        reference_id: '1bb3b174-d62b-3536-8eca-06e33b33a658',
      },
      {
        uuid: '22c372d1-1fef-32b3-a005-db66ad651992',
        title: '25 Most Used Illegal Drugs in America',
        link: 'https://finance.yahoo.com/news/25-most-used-illegal-drugs-170343786.html',
        summary:
          "In this article we will take a look at the top 25 illegal drugs Americans are addicted to. Click to skip ahead and see the top 10 most commonly abused illegal drugs in the United States. Insider Monkey is a financial news website and we closely watch addictive products because these companies' shares usually outperform […]",
        publisher: 'Insider Monkey',
        author: 'Insider Monkey Staff',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:BOLV',
            label: 'BOLIVAR MINING CORP',
            score: 1,
          },
          {
            term: 'TICKER:FB',
            label: 'Facebook, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:KO',
            label: 'Coca-Cola Company (The)',
            score: 1,
          },
          {
            term: 'TICKER:MO',
            label: 'Altria Group, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:PMPRX',
            label: 'Principal Fds, Inc. MidCap Valu',
            score: 1,
          },
          {
            term: 'TICKER:STZ',
            label: 'Constellation Brands, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:STZ-B',
            label: 'Constellation Brands, Inc.',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p style="text-align:justify;">In this article we will take a look at the top 25 illegal drugs Americans are addicted to. Click to skip ahead and see the <strong><a href="https://www.insidermonkey.com/blog/10-most-commonly-used-illegal-drugs-in-america-880854/">top 10 most commonly abused illegal drugs in the United States</a></strong>.</p> \n<p style="text-align:justify;">Insider Monkey is a financial news website and we closely watch addictive products because these companies\' shares usually outperform the market over the long-term. We aren\'t just talking about tobacco stocks like Altria Group, Inc. (NYSE:<a href="https://www.insidermonkey.com/insider-trading/company/altria%20group%20inc/764180/">MO</a>) and alcohol stocks like Constellation Brands, Inc. (NYSE:<a href="https://www.insidermonkey.com/insider-trading/company/constellation%20brands%20inc/16918/">STZ</a>), but sugar companies like The Coca-Cola Company (NYSE:<a href="https://www.insidermonkey.com/insider-trading/company/coca%20cola%20co/21344/">KO</a>), and social media stocks like Facebook Inc (NASDAQ:<a href="https://www.insidermonkey.com/insider-trading/company/facebook%20inc/1326801/">FB</a>) and its enabler Apple Inc. (NASDAQ:<a href="https://www.insidermonkey.com/insider-trading/company/apple%20inc/320193/">AAPL</a>) (if you don\'t think Apple and Facebook aren\'t addictive, try to live without them for a week). The size of the tobacco market is close to $50 billion in the United States. The size of the alcohol market is nearly $175 billion. The addictive fast food market is around $650 billion, and you know about the market values of Facebook and Apple. Addiction is a huge part of our economy and companies that market addictive products are potentially great investment opportunities.</p> \n<p style="text-align:justify;">We don\'t have direct estimates for the size of the illegal drug market in the United States. RAND Corporation estimates that Americans spend close to $150 billion for the top 4 drugs used in this country. Since the top four drugs account for about 70% of the market, we can estimate that the size of the illegal drug market is north of $200 billion. A large percentage of these drugs are distributed by Mexican drug cartels and their partners (see our article about the <a href="https://www.insidermonkey.com/blog/13-us-cities-that-are-crowded-by-mexican-drug-cartels-877829/">13 U.S. cities that are crowded by Mexican drug cartels</a>).</p> \n<p style="text-align:justify;">Americans might be spending $200 billion on illegal drugs, but the economic and social impact of our drug addiction is several times bigger. A 2017 Bureau of Justice report estimated that 21% of incarcerated people are in prison for crimes committed to obtain drugs or money to buy drugs. That means around 500,000 people are behind bars because of our drug addiction. These people are responsible for creating tons of jobs for law enforcement officers as well as healthcare workers. We have a feeling that Bureau of Justice\'s estimate is actually too conservative. A BoJ publication with the title "Drug Use, Dependence, and Abuse Among State Prisoners and Jail Inmates, 2007-2009" says the following about drug use among the prison population:</p> \n<blockquote> \n <p style="text-align:justify;">"Fifty-eight percent of State prisoners and 63 percent of sentenced jail inmates met the criteria for drug dependence or abuse during 2007-09, as defined by the Diagnostic and Statistical Manual of Mental Disorders, Fourth Edition (DSM-IV). In comparison, approximately 5 percent of the total general population age 18 or older met the DSM-IV criteria for drug dependence or abuse during this period. Overall, both State inmates (63 percent) and jail inmates (64 percent) regularly used marijuana/hashish more than any other drugs prior to incarceration. This was followed by cocaine/crack (24 percent of State inmates and 38 percent of jail inmates). Fewer State inmates (42 percent) and Jail inmates (37 percent) reported using drugs at the time of their offense. Sixty-nine percent of female State inmates and 72 percent of jail inmates met the DSM-IV criteria for drug dependence or abuse, compared to 57 percent of males in State prison and 62 percent of jail inmates. Drug dependence for State inmates and jail inmates is also reported by inmate age and race/ethnicity (Hispanics and non-Hispanic White or Black inmates). Twenty-eight percent of State inmates and 22 percent of sentenced jail inmates who met the criteria for drug dependence or abuse participated in a drug treatment program since admission to their current facility."</p> \n</blockquote> \n<p style="text-align:justify;">We don\'t think drug use among Americans hasn\'t declined dramatically since 2007-2009, which is why we believe a much larger percentage of incarcerated people are in prison because of their drug addiction. Our "war on drugs" clearly failed to deliver us a victory over the last 5 decades. We believe it is time to decriminalize most drug offenses and instead of spending tens of billions of dollars on fighting drug trafficking, we can invest those dollars into our communities and use those dollars for the education and rehabilitation of addicted people. We know that we can\'t stop the inflow of illegal drugs into the United States and outflow of our dollars into the pockets of drug lords (see our list of <a href="https://money.yahoo.com/el-chapo-12-richest-drug-214253459.html">12 richest drug lords of all time</a>). Why don\'t we produce and market these drugs so that we can at least stop enriching ruthless criminals and reduce violent crime rates? Maybe, way too many people in power benefit from the current system which is why it is so difficult to change it.</p> \n<p style="text-align:justify;">We created this list of top 25 most used illegal drugs in the United States using a recent report by National Forensic Laboratory Information System (NFLIS) covering 2019. Here is a summary of what NFLIS is (from the report):</p> \n<blockquote> \n <p style="text-align:justify;">"The National Forensic Laboratory Information System (NFLIS) is a program of the Drug Enforcement Administration (DEA), Diversion Control Division. NFLISDrug systematically collects drug identification results and associated information from drug cases submitted to and analyzed by Federal, State, and local forensic laboratories. These laboratories analyze controlled and noncontrolled substances secured in law enforcement operations across the country, making NFLIS-Drug an important resource in monitoring illicit drug use and trafficking, including the diversion of legally manufactured pharmaceuticals into illegal markets."</p> \n</blockquote> \n<p style="text-align:justify;">In 2019 State and local labs identified more than 1.5 million drug reports. Here are the top 25 drugs identified in these reports:</p> \n<h2 style="text-align:justify;">25. Gabapentin</h2> \n<p style="text-align:justify;">Number of drug reports: 3139</p> \n<p style="text-align:justify;">Percent of all cases: 0.21%</p> \n<p style="text-align:justify;">Gabapentin was most common in the South (1585 reports).</p> \n<h2 style="text-align:justify;">24. Carfentanil</h2> \n<p style="text-align:justify;">Number of drug reports: 3288</p> \n<p style="text-align:justify;">Percent of all cases: 0.22%</p> \n<p style="text-align:justify;">Carfentanil was most common in the Midwest (3075 reports).</p> \n<h2 style="text-align:justify;">23. Cannabidiol (CBD)</h2> \n<p style="text-align:justify;">Number of drug reports: 3315</p> \n<p style="text-align:justify;">Percent of all cases: 0.22%</p> \n<p style="text-align:justify;">Cannabidiol (CBD) was most common in the South (2043 reports).</p> \n<h2 style="text-align:justify;">22. Etizolam</h2> \n<p style="text-align:justify;">Number of drug reports: 3368</p> \n<p style="text-align:justify;">Percent of all cases: 0.22%</p> \n<p style="text-align:justify;">Etizolam was most common in the South (2219 reports).</p> \n<h2 style="text-align:justify;">21. Phencyclidine (PCP)</h2> \n<p style="text-align:justify;">Number of drug reports: 3979</p> \n<p style="text-align:justify;">Percent of all cases: 0.26%</p> \n<p style="text-align:justify;">Phencyclidine (PCP) was most common in the South (1840 reports).</p> \n<p style="text-align:justify;"><img class="aligncenter wp-image-880966" src="https://s1.yimg.com/uu/api/res/1.2/lFY661vDZHu1GdWDgpOIeQ--/cT03NTthcHBpZD15dmlkZW9mZWVkczs-/https://media.zenfs.com/en-us/insidermonkey.com/763409ec95badff87c8e640d8d9e5e13" alt="most common illegal drugs used in the United States" width="370" height="555"></p> \n<h2 style="text-align:justify;">\n <!--nextpage-->20. Lysergic acid diethylamide (LSD)</h2> \n<p style="text-align:justify;">Number of drug reports: 4151</p> \n<p style="text-align:justify;">Percent of all cases: 0.27%</p> \n<p style="text-align:justify;">Lysergic acid diethylamide (LSD) was most common in the Midwest (1704 reports).</p> \n<h2 style="text-align:justify;">19. 5F-MDMB-PICA</h2> \n<p style="text-align:justify;">Number of drug reports: 4671</p> \n<p style="text-align:justify;">Percent of all cases: 0.31%</p> \n<p style="text-align:justify;">5F-MDMB-PICA was most common in the South (2056 reports).</p> \n<h2 style="text-align:justify;">18. Psilocin/psilocibin</h2> \n<p style="text-align:justify;">Number of drug reports: 4815</p> \n<p style="text-align:justify;">Percent of all cases: 0.32%</p> \n<p style="text-align:justify;">Psilocin/psilocibin was most common in the West (1553 reports).</p> \n<h2 style="text-align:justify;">17. Naloxone</h2> \n<p style="text-align:justify;">Number of drug reports: 4991</p> \n<p style="text-align:justify;">Percent of all cases: 0.33%</p> \n<p style="text-align:justify;">Naloxone was most common in the South (2664 reports).</p> \n<h2 style="text-align:justify;">16. Eutylone</h2> \n<p style="text-align:justify;">Number of drug reports: 5787</p> \n<p style="text-align:justify;">Percent of all cases: 0.38%</p> \n<p style="text-align:justify;">Eutylone was most common in the South (4962 reports).</p> \n<h2 style="text-align:justify;">15. ANPP</h2> \n<p style="text-align:justify;">Number of drug reports: 5798</p> \n<p style="text-align:justify;">Percent of all cases: 0.38%</p> \n<p style="text-align:justify;">ANPP was most common in the Northeast (3038 reports).</p> \n<h2 style="text-align:justify;">14. MDMA</h2> \n<p style="text-align:justify;">Number of drug reports: 7238</p> \n<p style="text-align:justify;">Percent of all cases: 0.48%</p> \n<p style="text-align:justify;">MDMA was most common in the Midwest (2506 reports).</p> \n<h2 style="text-align:justify;">13. Clonazepam</h2> \n<p style="text-align:justify;">Number of drug reports: 7960</p> \n<p style="text-align:justify;">Percent of all cases: 0.52%</p> \n<p style="text-align:justify;">Clonazepam was most common in the South (3815 reports).</p> \n<h2 style="text-align:justify;">12. Tramadol</h2> \n<p style="text-align:justify;">Number of drug reports: 8196</p> \n<p style="text-align:justify;">Percent of all cases: 0.54%</p> \n<p style="text-align:justify;">Tramadol was most common in the South (2982 reports).</p> \n<h2 style="text-align:justify;">11. Amphetamine</h2> \n<p style="text-align:justify;">Number of drug reports: 11242</p> \n<p style="text-align:justify;">Percent of all cases: 0.74%</p> \n<p style="text-align:justify;">Amphetamine was most common in the South (5433 reports).</p> Click to continue reading and see the \n<strong><a href="https://www.insidermonkey.com/blog/10-most-commonly-used-illegal-drugs-in-america-880854/">top 10 most commonly abused illegal drugs in the United States</a></strong>. &nbsp; Disclosure: \n<a href="https://www.insidermonkey.com/blog/25-most-used-illegal-drugs-in-america-880853/">25 Most Used Illegal Drugs in America</a> is originally published at Insider Monkey. \n<p style="text-align:justify;"></p>',
        streams: [],
        ignore_main_image: true,
        published_at: 1601399023,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 640,
              height: 960,
              url:
                'https://s.yimg.com/uu/api/res/1.2/W2Oem4WaiWjsyfoY0Gdb3A--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/JGk17uD2sqYu5eJRD_xQ4Q--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/insidermonkey.com/763409ec95badff87c8e640d8d9e5e13',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/IDEQEARQEaNQ3y4HgQSwDg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/JGk17uD2sqYu5eJRD_xQ4Q--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/insidermonkey.com/763409ec95badff87c8e640d8d9e5e13',
              tags: null,
            },
            {
              tag: '320',
              width: 213,
              height: 320,
              url:
                'https://s.yimg.com/uu/api/res/1.2/2lpKrlFr6HnMOIegpIGjSw--~B/Zmk9ZmlsbDtoPTMyMDt3PTIxMzthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/JGk17uD2sqYu5eJRD_xQ4Q--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/insidermonkey.com/763409ec95badff87c8e640d8d9e5e13',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/EjexrJg042k8.3LErAvLQg--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/JGk17uD2sqYu5eJRD_xQ4Q--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/insidermonkey.com/763409ec95badff87c8e640d8d9e5e13',
              tags: null,
            },
            {
              tag: '640',
              width: 427,
              height: 640,
              url:
                'https://s.yimg.com/uu/api/res/1.2/bLfQwZzqBoZm_E90bfJaVg--~B/Zmk9ZmlsbDtoPTY0MDt3PTQyNzthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/JGk17uD2sqYu5eJRD_xQ4Q--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/insidermonkey.com/763409ec95badff87c8e640d8d9e5e13',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/K9yjliwmvnrtxQagXbMI8A--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/JGk17uD2sqYu5eJRD_xQ4Q--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/insidermonkey.com/763409ec95badff87c8e640d8d9e5e13',
              tags: null,
            },
            {
              tag: '768',
              width: 512,
              height: 768,
              url:
                'https://s.yimg.com/uu/api/res/1.2/8uIIA1lBbQKN1IHitmTCRA--~B/Zmk9ZmlsbDtoPTc2ODt3PTUxMjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/JGk17uD2sqYu5eJRD_xQ4Q--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/insidermonkey.com/763409ec95badff87c8e640d8d9e5e13',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/7N3qpBJF.rLYrVLXnxJJRw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/JGk17uD2sqYu5eJRD_xQ4Q--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/insidermonkey.com/763409ec95badff87c8e640d8d9e5e13',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/7N3qpBJF.rLYrVLXnxJJRw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/JGk17uD2sqYu5eJRD_xQ4Q--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/insidermonkey.com/763409ec95badff87c8e640d8d9e5e13',
              tags: null,
            },
            {
              tag: '160',
              width: 107,
              height: 160,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Nfco8tiA7kY8l5iQpM0.iw--~B/Zmk9ZmlsbDtoPTE2MDt3PTEwNzthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/JGk17uD2sqYu5eJRD_xQ4Q--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/insidermonkey.com/763409ec95badff87c8e640d8d9e5e13',
              tags: null,
            },
          ],
          original_height: 960,
          original_width: 640,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/W2Oem4WaiWjsyfoY0Gdb3A--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/JGk17uD2sqYu5eJRD_xQ4Q--~B/aD05NjA7dz02NDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/insidermonkey.com/763409ec95badff87c8e640d8d9e5e13',
        },
        is_magazine: false,
        reference_id: '22c372d1-1fef-32b3-a005-db66ad651992',
      },
      {
        uuid: '149d11f7-1723-3a13-8209-f058c6d9002d',
        title:
          "Apple Inc. -- Moody's announces completion of a periodic review of ratings of Apple Inc.",
        link:
          'http://www.moodys.com/page/viewresearchdoc.aspx?docid=PR_432432&cid=HFGG75LYEO30&yptr=yahoo',
        summary:
          "Announcement of Periodic Review: Moody's announces completion of a periodic review of ratings of Apple Inc.  New York, September 29, 2020 -- Moody's Investors Service (\"Moody's\") has completed a periodic review of the ratings of Apple Inc. and other ratings that are associated with the same analytical unit.  The review was conducted through a portfolio review in which Moody's reassessed the appropriateness of the ratings in the context of the relevant principal methodology(ies), recent developments, and a comparison of the financial and operating profile to similarly rated peers.",
        publisher: "Moody's",
        author: '',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601398869,
        main_image: null,
        is_magazine: false,
        reference_id: '149d11f7-1723-3a13-8209-f058c6d9002d',
      },
      {
        uuid: '903f5532-e3f3-34bb-9865-4583160ee9ba',
        title:
          'Dow Jones Falls 200 Points, As Apple, Tesla Stumble; Beyond Meat Soars 12% On Expanded Walmart Partnership',
        link:
          'https://www.investors.com/market-trend/stock-market-today/dow-jones-stock-market-rally-apple-tesla-stock-big-lots-beyond-meat-walmart-deal/?src=A00220&yptr=yahoo',
        summary:
          'The major stock indexes were lower early Tuesday, as the stock market rally attempt continues. Beyond Meat soared on expanded Walmart distribution.',
        publisher: "Investor's Business Daily",
        author: 'SCOTT LEHTONEN',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:BIG',
            label: 'Big Lots, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:BYND',
            label: 'Beyond Meat, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:MGISX',
            label: 'MSIF GLOBAL FRANCHISE Class IS',
            score: 1,
          },
          {
            term: 'TICKER:TGT',
            label: 'Target Corporation',
            score: 1,
          },
          {
            term: 'TICKER:TSLA',
            label: 'Tesla, Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601396038,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 945,
              height: 533,
              url:
                'https://s.yimg.com/uu/api/res/1.2/OEeEDgYbthmMoLUxHxNx5g--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/MfhJcZIZZVzz1WABvY6AgA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/3ead9fb9399bd137aa6940addccf47b2',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/gHBeI3QOhkqBz3fovrNLaA--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/MfhJcZIZZVzz1WABvY6AgA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/3ead9fb9399bd137aa6940addccf47b2',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/j_h05hEd.uWYCNQ6v4U2tw--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/MfhJcZIZZVzz1WABvY6AgA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/3ead9fb9399bd137aa6940addccf47b2',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/VFxOdcofBwrKz6j4u7JtJA--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/MfhJcZIZZVzz1WABvY6AgA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/3ead9fb9399bd137aa6940addccf47b2',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 361,
              url:
                'https://s.yimg.com/uu/api/res/1.2/obqOcdbvEQ5641IhVSPBHQ--~B/Zmk9ZmlsbDtoPTM2MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/MfhJcZIZZVzz1WABvY6AgA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/3ead9fb9399bd137aa6940addccf47b2',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 361,
              url:
                'https://s.yimg.com/uu/api/res/1.2/obqOcdbvEQ5641IhVSPBHQ--~B/Zmk9ZmlsbDtoPTM2MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/MfhJcZIZZVzz1WABvY6AgA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/3ead9fb9399bd137aa6940addccf47b2',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/WlpBHYWOkQiy3fKhsZBAiw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/MfhJcZIZZVzz1WABvY6AgA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/3ead9fb9399bd137aa6940addccf47b2',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 433,
              url:
                'https://s.yimg.com/uu/api/res/1.2/u8AHogdDlvzVnbE7DVkcIA--~B/Zmk9ZmlsbDtoPTQzMzt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/MfhJcZIZZVzz1WABvY6AgA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/3ead9fb9399bd137aa6940addccf47b2',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/OqKLPwD.flb7Z5pYvIu5XQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/MfhJcZIZZVzz1WABvY6AgA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/3ead9fb9399bd137aa6940addccf47b2',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/OqKLPwD.flb7Z5pYvIu5XQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/MfhJcZIZZVzz1WABvY6AgA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/3ead9fb9399bd137aa6940addccf47b2',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/FCvHs6BVfJ6CvJ5eCssGwQ--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/MfhJcZIZZVzz1WABvY6AgA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/3ead9fb9399bd137aa6940addccf47b2',
              tags: null,
            },
          ],
          original_height: 533,
          original_width: 945,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/OEeEDgYbthmMoLUxHxNx5g--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/MfhJcZIZZVzz1WABvY6AgA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/3ead9fb9399bd137aa6940addccf47b2',
        },
        is_magazine: false,
        reference_id: '903f5532-e3f3-34bb-9865-4583160ee9ba',
      },
      {
        uuid: '21c0b7ba-7233-3159-a003-c77dd02bc8b6',
        title: "Google Isn't Giving Up on Fitbit Just Yet",
        link:
          'https://www.fool.com/investing/2020/09/29/google-isnt-giving-up-on-fitbit-just-yet/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          'Alphabet tries one last time to win regulatory approval for its $2.1 billion deal for the struggling wearables pioneer.',
        publisher: 'Motley Fool',
        author: 'Rick Munarriz, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:AMZN',
            label: 'Amazon.com, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:FIT',
            label: 'Fitbit, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOGL',
            label: 'Alphabet Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601391300,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1400,
              height: 789,
              url:
                'https://s.yimg.com/uu/api/res/1.2/h97gQi7ndhq6yNyiZREgNQ--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/o8ee_ZpRJ0Mt4yy9Wg5A.A--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2ada1805bd3bf5316234a79979149807',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/eLV68REjqiZM7EPxi3Dh2A--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/o8ee_ZpRJ0Mt4yy9Wg5A.A--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2ada1805bd3bf5316234a79979149807',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/JM_GaUqIyuT3qBYKtGgo.w--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/o8ee_ZpRJ0Mt4yy9Wg5A.A--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2ada1805bd3bf5316234a79979149807',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/MLw6H5eCm.39frMlEc64uQ--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/o8ee_ZpRJ0Mt4yy9Wg5A.A--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2ada1805bd3bf5316234a79979149807',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 361,
              url:
                'https://s.yimg.com/uu/api/res/1.2/wjSQ_RtSnAMDf7GIdNSCrg--~B/Zmk9ZmlsbDtoPTM2MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/o8ee_ZpRJ0Mt4yy9Wg5A.A--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2ada1805bd3bf5316234a79979149807',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 361,
              url:
                'https://s.yimg.com/uu/api/res/1.2/wjSQ_RtSnAMDf7GIdNSCrg--~B/Zmk9ZmlsbDtoPTM2MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/o8ee_ZpRJ0Mt4yy9Wg5A.A--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2ada1805bd3bf5316234a79979149807',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/4E6jcCZRyC21dKP.zbZrLw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/o8ee_ZpRJ0Mt4yy9Wg5A.A--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2ada1805bd3bf5316234a79979149807',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 433,
              url:
                'https://s.yimg.com/uu/api/res/1.2/vcZUAOtqemOy.ReOBGYn3w--~B/Zmk9ZmlsbDtoPTQzMzt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/o8ee_ZpRJ0Mt4yy9Wg5A.A--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2ada1805bd3bf5316234a79979149807',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/eHocgZD7MzyoJHibYZ44xQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/o8ee_ZpRJ0Mt4yy9Wg5A.A--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2ada1805bd3bf5316234a79979149807',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/eHocgZD7MzyoJHibYZ44xQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/o8ee_ZpRJ0Mt4yy9Wg5A.A--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2ada1805bd3bf5316234a79979149807',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ccAkcdCYcQRI_ihwT8Fmow--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/o8ee_ZpRJ0Mt4yy9Wg5A.A--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2ada1805bd3bf5316234a79979149807',
              tags: null,
            },
          ],
          original_height: 789,
          original_width: 1400,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/h97gQi7ndhq6yNyiZREgNQ--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/o8ee_ZpRJ0Mt4yy9Wg5A.A--~B/aD03ODk7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2ada1805bd3bf5316234a79979149807',
        },
        is_magazine: false,
        reference_id: '21c0b7ba-7233-3159-a003-c77dd02bc8b6',
      },
      {
        uuid: 'b03db92b-63a5-36da-b38d-e1e1660ed6ca',
        title: 'IDC: Wearables Market to Approach 400 Million Units This Year',
        link:
          'https://www.fool.com/investing/2020/09/29/idc-wearables-market-to-approach-400-million-units/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          'Despite the macroeconomic impacts of the COVID-19 contagion this year, the global wearables market is still expected to grow by approximately 15% in 2020, according to recent estimates  from market researcher IDC.',
        publisher: 'Motley Fool',
        author: 'Evan Niu, CFA, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:AMZN',
            label: 'Amazon.com, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:FIT',
            label: 'Fitbit, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOGL',
            label: 'Alphabet Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601384400,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1400,
              height: 787,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ojS2XMEbRQoXv8f3zHkWEg--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/aiAjGI0EDar_dKZbHNxLVw--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/8ed9a87ff287c30e28fa542d2c5c8ab8',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Ptvpg.c80H8Qg6lQGpJaVQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/aiAjGI0EDar_dKZbHNxLVw--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/8ed9a87ff287c30e28fa542d2c5c8ab8',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/KbFlLGF4LCCDlcLpn8_cig--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/aiAjGI0EDar_dKZbHNxLVw--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/8ed9a87ff287c30e28fa542d2c5c8ab8',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/9bY2q1MLiq5nfI_hwR4A.A--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/aiAjGI0EDar_dKZbHNxLVw--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/8ed9a87ff287c30e28fa542d2c5c8ab8',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/8Lla0bmp844tbUnIer5eeA--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/aiAjGI0EDar_dKZbHNxLVw--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/8ed9a87ff287c30e28fa542d2c5c8ab8',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/8Lla0bmp844tbUnIer5eeA--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/aiAjGI0EDar_dKZbHNxLVw--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/8ed9a87ff287c30e28fa542d2c5c8ab8',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/j_uPb6_.mBdF6HCm6efCmw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/aiAjGI0EDar_dKZbHNxLVw--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/8ed9a87ff287c30e28fa542d2c5c8ab8',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 432,
              url:
                'https://s.yimg.com/uu/api/res/1.2/LYVVYM8lqMWa1.tM0NRe1g--~B/Zmk9ZmlsbDtoPTQzMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/aiAjGI0EDar_dKZbHNxLVw--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/8ed9a87ff287c30e28fa542d2c5c8ab8',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/I_pN5WazWY2dE4IJ0B9r.g--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/aiAjGI0EDar_dKZbHNxLVw--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/8ed9a87ff287c30e28fa542d2c5c8ab8',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/I_pN5WazWY2dE4IJ0B9r.g--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/aiAjGI0EDar_dKZbHNxLVw--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/8ed9a87ff287c30e28fa542d2c5c8ab8',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/nAX1.v9DpG.5SZmvPbe0bw--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/aiAjGI0EDar_dKZbHNxLVw--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/8ed9a87ff287c30e28fa542d2c5c8ab8',
              tags: null,
            },
          ],
          original_height: 787,
          original_width: 1400,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/ojS2XMEbRQoXv8f3zHkWEg--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/aiAjGI0EDar_dKZbHNxLVw--~B/aD03ODc7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/8ed9a87ff287c30e28fa542d2c5c8ab8',
        },
        is_magazine: false,
        reference_id: 'b03db92b-63a5-36da-b38d-e1e1660ed6ca',
      },
      {
        uuid: '16ff000b-9633-37b7-9f48-409ad9140784',
        title:
          'Dow Jones Futures: Stock Market Rally Needs This With Presidential Debate On Tap; 7 Leaders In Buy Zones',
        link:
          'https://www.investors.com/market-trend/stock-market-today/dow-jones-futures-stock-market-rally-volume-target-nvidia/?src=A00220&yptr=yahoo',
        summary:
          'The stock market rally attempt still needs higher volume. Target and Nvidia are stocks in buy zones. President Trump debates Joe Biden tonight.',
        publisher: "Investor's Business Daily",
        author: 'ED CARSON',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:ADBE',
            label: 'Adobe Inc.',
            score: 1,
          },
          {
            term: 'TICKER:AMD',
            label: 'Advanced Micro Devices, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:NVDA',
            label: 'NVIDIA Corporation',
            score: 1,
          },
          {
            term: 'TICKER:TGT',
            label: 'Target Corporation',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601381850,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1000,
              height: 563,
              url:
                'https://s.yimg.com/uu/api/res/1.2/7Z6SvAuStaTsQZvHKQVIWg--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/HMK_lmEvzA0cI.y90C7r2A--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/da8fe3de95e98df41551b71e3d730b5b',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/RB4W.ividmv_wdFVMbnVtg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/HMK_lmEvzA0cI.y90C7r2A--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/da8fe3de95e98df41551b71e3d730b5b',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/UXkGZQC.7aRTcSimFz6U.Q--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/HMK_lmEvzA0cI.y90C7r2A--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/da8fe3de95e98df41551b71e3d730b5b',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/XEtiBkPqpOvbyB6YJJy58w--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/HMK_lmEvzA0cI.y90C7r2A--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/da8fe3de95e98df41551b71e3d730b5b',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/LyF3kJhApENDYwpKmM1MgQ--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/HMK_lmEvzA0cI.y90C7r2A--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/da8fe3de95e98df41551b71e3d730b5b',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/LyF3kJhApENDYwpKmM1MgQ--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/HMK_lmEvzA0cI.y90C7r2A--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/da8fe3de95e98df41551b71e3d730b5b',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/eCWiPoEKH.6YeUiGJUEPiw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/HMK_lmEvzA0cI.y90C7r2A--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/da8fe3de95e98df41551b71e3d730b5b',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 432,
              url:
                'https://s.yimg.com/uu/api/res/1.2/JClUG9G2.m3TKIyvp3nQPA--~B/Zmk9ZmlsbDtoPTQzMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/HMK_lmEvzA0cI.y90C7r2A--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/da8fe3de95e98df41551b71e3d730b5b',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/m83eVc61vDziC3MByGWziQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/HMK_lmEvzA0cI.y90C7r2A--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/da8fe3de95e98df41551b71e3d730b5b',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/m83eVc61vDziC3MByGWziQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/HMK_lmEvzA0cI.y90C7r2A--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/da8fe3de95e98df41551b71e3d730b5b',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Js0kS3mvg.moPvJjBKFxDw--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/HMK_lmEvzA0cI.y90C7r2A--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/da8fe3de95e98df41551b71e3d730b5b',
              tags: null,
            },
          ],
          original_height: 563,
          original_width: 1000,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/7Z6SvAuStaTsQZvHKQVIWg--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/HMK_lmEvzA0cI.y90C7r2A--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/da8fe3de95e98df41551b71e3d730b5b',
        },
        is_magazine: false,
        reference_id: '16ff000b-9633-37b7-9f48-409ad9140784',
      },
      {
        uuid: '4f289771-9618-3e21-8a73-8bbf47de54a5',
        title: 'Will Disney Split Its Stock?',
        link:
          'https://www.fool.com/investing/2020/09/29/will-disney-split-its-stock/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          'Stock splits have been in the news recently after high-profile names like Apple (NASDAQ: AAPL) and Tesla (NASDAQ: TSLA) enacted 4-for-1 and 5-for-1 splits, respectively.  Not long after, utility and renewable energy company NextEra Energy (NYSE: NEE) announced another 4-for-1 split with its share price approaching $300.  Walt Disney (NYSE: DIS) is a popular name with its stock also trading over $100 per share.',
        publisher: 'Motley Fool',
        author: 'Howard Smith, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:DIS',
            label: 'Walt Disney Company (The)',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601379420,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1400,
              height: 896,
              url:
                'https://s.yimg.com/uu/api/res/1.2/flk4GTaXTxidlMWWV2L9pQ--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/tvhL7RnzK7ytH8D1wotd5Q--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2a4baf0d8cd3de2270f7ba8e6c686f92',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/O.QZuw_ZdnuKRBNCYOlnyA--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/tvhL7RnzK7ytH8D1wotd5Q--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2a4baf0d8cd3de2270f7ba8e6c686f92',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 205,
              url:
                'https://s.yimg.com/uu/api/res/1.2/cejaYSvHzZdwsZ24zHHoGw--~B/Zmk9ZmlsbDtoPTIwNTt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/tvhL7RnzK7ytH8D1wotd5Q--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2a4baf0d8cd3de2270f7ba8e6c686f92',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/6rlb_J.6.8sRAxffT2sA.Q--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/tvhL7RnzK7ytH8D1wotd5Q--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2a4baf0d8cd3de2270f7ba8e6c686f92',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 410,
              url:
                'https://s.yimg.com/uu/api/res/1.2/hbK71gli_Apuw2eXDpkiYQ--~B/Zmk9ZmlsbDtoPTQxMDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/tvhL7RnzK7ytH8D1wotd5Q--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2a4baf0d8cd3de2270f7ba8e6c686f92',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 410,
              url:
                'https://s.yimg.com/uu/api/res/1.2/hbK71gli_Apuw2eXDpkiYQ--~B/Zmk9ZmlsbDtoPTQxMDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/tvhL7RnzK7ytH8D1wotd5Q--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2a4baf0d8cd3de2270f7ba8e6c686f92',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/9sfETq6tMIA4lGfX.NxcZA--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/tvhL7RnzK7ytH8D1wotd5Q--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2a4baf0d8cd3de2270f7ba8e6c686f92',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 492,
              url:
                'https://s.yimg.com/uu/api/res/1.2/9ZuoLMXCDDOK1Jk5U8yZug--~B/Zmk9ZmlsbDtoPTQ5Mjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/tvhL7RnzK7ytH8D1wotd5Q--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2a4baf0d8cd3de2270f7ba8e6c686f92',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/BdpZxm2drC4v9jY7SlVknw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/tvhL7RnzK7ytH8D1wotd5Q--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2a4baf0d8cd3de2270f7ba8e6c686f92',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/BdpZxm2drC4v9jY7SlVknw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/tvhL7RnzK7ytH8D1wotd5Q--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2a4baf0d8cd3de2270f7ba8e6c686f92',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 102,
              url:
                'https://s.yimg.com/uu/api/res/1.2/SQpZ.k_xhwdLtFFS5DgX5A--~B/Zmk9ZmlsbDtoPTEwMjt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/tvhL7RnzK7ytH8D1wotd5Q--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2a4baf0d8cd3de2270f7ba8e6c686f92',
              tags: null,
            },
          ],
          original_height: 896,
          original_width: 1400,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/flk4GTaXTxidlMWWV2L9pQ--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/tvhL7RnzK7ytH8D1wotd5Q--~B/aD04OTY7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/2a4baf0d8cd3de2270f7ba8e6c686f92',
        },
        is_magazine: false,
        reference_id: '4f289771-9618-3e21-8a73-8bbf47de54a5',
      },
      {
        uuid: '7ad59dbf-80de-34d9-8198-dfb8171b1f1d',
        title: 'Google Makes Data Pledge to Win EU Nod for Fitbit Deal',
        link:
          'https://finance.yahoo.com/news/google-makes-data-pledge-win-113610801.html',
        summary:
          '(Bloomberg) -- Google offered an improved package of concessions to avoid shutting out rival fitness trackers and apps in a bid to clinch European Union approval for its $2.1 billion takeover of Fitbit, the company said in a statement.Building on an earlier pledge not to use Fitbit data for Google ads, the company is trying to assure rival trackers and apps that it won’t shut them off from Google services.The company is “formalizing our longstanding commitment to supporting other wearable manufacturers on Android and to continue to allow Fitbit users to connect to third party services” via applications if they want to, it said in the Tuesday statement.The new offer hits many of the points brought up by rivals concerned that the deal could create a powerful controller of personal data that could also prevent competing apps and wearable trackers from working with Google’s services. If feedback from rivals and customers is positive, the European Commission could then approve the Fitbit deal before a Dec. 23 deadline.The EU dismissed an earlier pledge to keep Fitbit data separate from Google’s information last month, saying it didn’t address all its concerns and didn’t include all Fitbit data that could be used for advertising.Antitrust agencies are increasingly suspicious of tech giants’ takeovers, aiming to prevent the already powerful firms from conquering innovative new markets where data is often the most prized asset.The EU opened an in-depth probe into the Fitbit deal last month to check how Google could bolster its “data advantage” in online advertising with information it collects from Fitbit’s wearable trackers.The EU’s wide focus on online ads clashes with Google’s view that the “deal is about devices, not data” and that it’s adding a service -- wearable health devices -- where it currently isn’t active and faces plenty of rivals from Apple Inc., Samsung Electronics Co. Ltd., Garmin Ltd. and others.“The wearables space is highly crowded, and we believe the combination of Google and Fitbit’s hardware efforts will increase competition in the sector, benefiting consumers and making the next generation of devices better and more affordable,” Google said in the statement.(Updates with Google statement starting in first paragraph.)For more articles like this, please visit us at bloomberg.comSubscribe now to stay ahead with the most trusted business news source.©2020 Bloomberg L.P.',
        publisher: 'Bloomberg',
        author: 'Aoife White',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOG',
            label: 'Alphabet Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOGL',
            label: 'Alphabet Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GRMN',
            label: 'Garmin Ltd.',
            score: 1,
          },
          {
            term: 'TICKER:SSNLF',
            label: '',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p>(Bloomberg) -- Google offered an improved package of concessions to avoid shutting out rival fitness trackers and apps in a bid to clinch European Union approval for its $2.1 billion takeover of Fitbit, the company said in a statement.</p>\n<p>Building on an earlier pledge not to use Fitbit data for Google ads, the company is trying to assure rival trackers and apps that it won’t shut them off from Google services.</p>\n<p>The company is “formalizing our longstanding commitment to supporting other wearable manufacturers on Android and to continue to allow Fitbit users to connect to third party services” via applications if they want to, it said in the Tuesday statement.</p>\n<p>The new offer hits many of the points brought up by rivals concerned that the deal could create a powerful controller of personal data that could also prevent competing apps and wearable trackers from working with Google’s services. If feedback from rivals and customers is positive, the European Commission could then approve the Fitbit deal before a Dec. 23 deadline.</p>\n<p>The EU dismissed an earlier pledge to keep Fitbit data separate from Google’s information last month, saying it didn’t address all its concerns and didn’t include all Fitbit data that could be used for advertising.</p>\n<p>Antitrust agencies are increasingly suspicious of tech giants’ takeovers, aiming to prevent the already powerful firms from conquering innovative new markets where data is often the most prized asset.</p>\n<p>The EU opened an in-depth probe into the Fitbit deal last month to check how Google could bolster its “data advantage” in online advertising with information it collects from Fitbit’s wearable trackers.</p>\n<p>The EU’s wide focus on online ads clashes with Google’s view that the “deal is about devices, not data” and that it’s adding a service -- wearable health devices -- where it currently isn’t active and faces plenty of rivals from Apple Inc., Samsung Electronics Co. Ltd., Garmin Ltd. and others.</p>\n<p>“The wearables space is highly crowded, and we believe the combination of Google and Fitbit’s hardware efforts will increase competition in the sector, benefiting consumers and making the next generation of devices better and more affordable,” Google said in the statement.</p>\n<p>(Updates with Google statement starting in first paragraph.)</p>\n<p>For more articles like this, please visit us at <a href="https://www.bloomberg.com">bloomberg.com</a></p>\n<p><a href="https://www.bloomberg.com/subscriptions/67obqkd5zdp5lj8/?utm_source=yahoo_usn">Subscribe now</a> to stay ahead with the most trusted business news source.</p>\n<p>©2020 Bloomberg L.P.</p>',
        streams: [],
        ignore_main_image: false,
        published_at: 1601379370,
        main_image: null,
        is_magazine: false,
        reference_id: '7ad59dbf-80de-34d9-8198-dfb8171b1f1d',
      },
      {
        uuid: '1d2b7223-3a54-3659-a60b-f2642861b669',
        title: 'Buy These Top 5G Stocks Before It Gets Too Late',
        link:
          'https://www.fool.com/investing/2020/09/29/buy-these-top-5g-stocks-before-it-gets-too-late/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          "Additionally, investments in 5G infrastructure will create demand for compatible smartphones.  One can invest in a 5G infrastructure-oriented stock such as Applied Materials (NASDAQ: AMAT) -- whose offerings will make it possible for chipmakers to make the chips required for network deployment or for use in devices supporting the new standard.  On the other hand, Synaptics (NASDAQ: SYNA) gives investors another way to take advantage of the 5G revolution as it supplies a key technology that's becoming ubiquitous with new smartphones.",
        publisher: 'Motley Fool',
        author: 'Harsh Chauhan, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:AMAT',
            label: 'Applied Materials, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:SYNA',
            label: 'Synaptics Incorporated',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601379000,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1400,
              height: 933,
              url:
                'https://s.yimg.com/uu/api/res/1.2/.feuc_PSklcBORcFh3AfWA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/w2irtR2ZKOwbuOkt5xk1DQ--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f222579d9ade79fed4b21ba87dfeb597',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/2k_jnrWZqReFYpWkuDHnPA--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/w2irtR2ZKOwbuOkt5xk1DQ--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f222579d9ade79fed4b21ba87dfeb597',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 213,
              url:
                'https://s.yimg.com/uu/api/res/1.2/x5B51kSU5ASPgVLrSUlzjA--~B/Zmk9ZmlsbDtoPTIxMzt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/w2irtR2ZKOwbuOkt5xk1DQ--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f222579d9ade79fed4b21ba87dfeb597',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/o8YFpzMytFRLEWFBfBCxEw--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/w2irtR2ZKOwbuOkt5xk1DQ--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f222579d9ade79fed4b21ba87dfeb597',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/noeQdzsKjU8YJhEZhqjFRw--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/w2irtR2ZKOwbuOkt5xk1DQ--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f222579d9ade79fed4b21ba87dfeb597',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/noeQdzsKjU8YJhEZhqjFRw--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/w2irtR2ZKOwbuOkt5xk1DQ--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f222579d9ade79fed4b21ba87dfeb597',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/c3OiZ6OtsCBmAPZ5M0KlcQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/w2irtR2ZKOwbuOkt5xk1DQ--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f222579d9ade79fed4b21ba87dfeb597',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 512,
              url:
                'https://s.yimg.com/uu/api/res/1.2/QzBuwBl4k5sYStapUyGo6g--~B/Zmk9ZmlsbDtoPTUxMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/w2irtR2ZKOwbuOkt5xk1DQ--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f222579d9ade79fed4b21ba87dfeb597',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/krR6Q6CT8mqAdMthqUFItQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/w2irtR2ZKOwbuOkt5xk1DQ--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f222579d9ade79fed4b21ba87dfeb597',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/krR6Q6CT8mqAdMthqUFItQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/w2irtR2ZKOwbuOkt5xk1DQ--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f222579d9ade79fed4b21ba87dfeb597',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 107,
              url:
                'https://s.yimg.com/uu/api/res/1.2/NmfA6g2YCSeHjdJCsp7XFQ--~B/Zmk9ZmlsbDtoPTEwNzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/w2irtR2ZKOwbuOkt5xk1DQ--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f222579d9ade79fed4b21ba87dfeb597',
              tags: null,
            },
          ],
          original_height: 933,
          original_width: 1400,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/.feuc_PSklcBORcFh3AfWA--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/w2irtR2ZKOwbuOkt5xk1DQ--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/f222579d9ade79fed4b21ba87dfeb597',
        },
        is_magazine: false,
        reference_id: '1d2b7223-3a54-3659-a60b-f2642861b669',
      },
      {
        uuid: 'f65c05ef-66c5-39e0-83de-f844ae4590f5',
        title: "Apple's App Store Now Faces a Coalition of High-Profile Rebels",
        link:
          'https://www.fool.com/investing/2020/09/29/apple-app-store-faces-coalition-of-rebels/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          "Spotify, Match, and Epic have joined a coalition of over a dozen companies that are challenging Apple's App Store fees.",
        publisher: 'Motley Fool',
        author: 'Leo Sun, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOGL',
            label: 'Alphabet Inc.',
            score: 1,
          },
          {
            term: 'TICKER:MSFT',
            label: 'Microsoft Corporation',
            score: 1,
          },
          {
            term: 'TICKER:SPOT',
            label: 'Spotify Technology S.A.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601378100,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1400,
              height: 750,
              url:
                'https://s.yimg.com/uu/api/res/1.2/e2jUZsdIg68g06hTh3HDGQ--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/p9i.8ga2wqVoegWbJyxD0A--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/c0868491aa8942d830c16c70d9e9e2b8',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/brlc8ovkCTFXQFm._SpPrg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/p9i.8ga2wqVoegWbJyxD0A--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/c0868491aa8942d830c16c70d9e9e2b8',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 171,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Pptp1d3EAL2ce9xC_hQVNA--~B/Zmk9ZmlsbDtoPTE3MTt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/p9i.8ga2wqVoegWbJyxD0A--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/c0868491aa8942d830c16c70d9e9e2b8',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/uXL2lFoNAJq5MT0lT4wfAw--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/p9i.8ga2wqVoegWbJyxD0A--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/c0868491aa8942d830c16c70d9e9e2b8',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 343,
              url:
                'https://s.yimg.com/uu/api/res/1.2/h20MRuTDP3.Hl12jsPXmaA--~B/Zmk9ZmlsbDtoPTM0Mzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/p9i.8ga2wqVoegWbJyxD0A--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/c0868491aa8942d830c16c70d9e9e2b8',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 343,
              url:
                'https://s.yimg.com/uu/api/res/1.2/h20MRuTDP3.Hl12jsPXmaA--~B/Zmk9ZmlsbDtoPTM0Mzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/p9i.8ga2wqVoegWbJyxD0A--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/c0868491aa8942d830c16c70d9e9e2b8',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/7Cn9kT3oI.7FGInZy0l8Pg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/p9i.8ga2wqVoegWbJyxD0A--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/c0868491aa8942d830c16c70d9e9e2b8',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 411,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ZoyLvoy8gr64t2d9jarNpw--~B/Zmk9ZmlsbDtoPTQxMTt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/p9i.8ga2wqVoegWbJyxD0A--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/c0868491aa8942d830c16c70d9e9e2b8',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/cOehGIIEwvmPxdtaZgiNOA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/p9i.8ga2wqVoegWbJyxD0A--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/c0868491aa8942d830c16c70d9e9e2b8',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/cOehGIIEwvmPxdtaZgiNOA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/p9i.8ga2wqVoegWbJyxD0A--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/c0868491aa8942d830c16c70d9e9e2b8',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 86,
              url:
                'https://s.yimg.com/uu/api/res/1.2/WjUJUbBvgupetrI2yQv8FA--~B/Zmk9ZmlsbDtoPTg2O3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/p9i.8ga2wqVoegWbJyxD0A--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/c0868491aa8942d830c16c70d9e9e2b8',
              tags: null,
            },
          ],
          original_height: 750,
          original_width: 1400,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/e2jUZsdIg68g06hTh3HDGQ--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/p9i.8ga2wqVoegWbJyxD0A--~B/aD03NTA7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/c0868491aa8942d830c16c70d9e9e2b8',
        },
        is_magazine: false,
        reference_id: 'f65c05ef-66c5-39e0-83de-f844ae4590f5',
      },
      {
        uuid: '7aa82fef-4d1c-3408-b00e-efc5c9960411',
        title: 'Docomo Buyout Shows Dumb Pipes No Longer Cut It',
        link:
          'https://finance.yahoo.com/news/docomo-buyout-shows-dumb-pipes-022706646.html',
        summary:
          '(Bloomberg Opinion) -- Nippon Telegraph & Telephone Corp.’s plan to buy out its NTT Docomo Inc. wireless unit would mark the end of an era for a company once hailed as the world’s leading mobile operator. It also signals a stark new reality in the telco business: that mere connectivity isn’t enough.Docomo said its board will meet Tuesday to consider NTT’s proposal. That seems moot: The parent already owns 66% of the subsidiary. It’s likely to offer 30% more than the share price at yesterday’s close, the Nikkei newspaper reported earlier. That would be at the upper end of average premiums globally for telco deals valued at more than $5 billion in the past five years, according to data compiled by Bloomberg. Still, it’s worth noting that prior to the news Docomo had fallen 20% below its March high and is well below its 50-, 90- and 200-day averages.This month’s appointment of Yoshihide Suga as Japanese prime minister to succeed Shinzo Abe may have been a spur. Suga had been an outspoken critic of mobile data pricing before taking over the top job, and now forcing down tariffs has become an easy policy win. Going private would take Docomo out of the public spotlight as it renovates its business model and weathers that storm.Docomo’s struggle was apparent even before Suga rose to the top. More than two decades ago, it amazed the world with the release of i-Mode, a mobile internet service that allowed Japanese consumers to read email and surf the web during their morning commute. Apple Inc.’s first iPhone wouldn’t arrive for another eight years.I-Mode helped Docomo post annual revenue growth reaching as much as 26% and operating income gains of 42%, cementing its place as Japan’s No. 1 wireless carrier. While the company has held onto that position, it has done so by cutting average revenue per user below levels at KDDI Corp. or Masayoshi Son’s SoftBank Corp., the first telco in Japan to sell the iPhone.Price wars with those rivals have hurt, even amid accusations that rates remain too high by global comparison. Docomo has maintained a respectable operating margin of around 20% in recent years (it dropped to 18.4% for the year to March 30 amid the Covid pandemic). Revenue and operating income growth have slowed to a crawl, though, lagging behind competitors. The reasons can be seen in its sales breakdown, with 80% still coming from mobile services. By comparison, SoftBank owns Yahoo Japan (via a subsidiary) and gets additional revenue from fixed-line businesses. Consumer and enterprise wireless service accounts for only about half of SoftBank’s sales. KDDI isn’t quite as diversified, yet it’s able to lean a little more on non-telecom businesses and is pushing its so-called “life design” services that include e-commerce, personal finance, entertainment and education.Then there’s Rakuten Inc., which recently entered the mobile business and promises to drive prices down even further. It’s doubtful whether the e-commerce company intends to make much profit from its wireless unit, instead using it as a loss-leader to drive online retail and related services. That leaves Docomo looking pedestrian as a purveyor of mobile connectivity, aka dumb pipes, like the former state-owned incumbent that it is. With the onerous costs of a 5G rollout looming and a price war set to escalate, the safest place may be back under the protection of its majority owner. Investors need not worry about NTT having to shield its subsidiary from public markets. A combined entity could leverage procurement, better integrate infrastructure and services, and streamline its balance sheet. Once the business is stabilized and profit growth returns, look for NTT to be the biggest winner from a future Docomo initial public offering. This column does not necessarily reflect the opinion of the editorial board or Bloomberg LP and its owners.Tim Culpan is a Bloomberg Opinion columnist covering technology. He previously covered technology for Bloomberg News.For more articles like this, please visit us at bloomberg.com/opinionSubscribe now to stay ahead with the most trusted business news source.©2020 Bloomberg L.P.',
        publisher: 'Bloomberg',
        author: 'Tim Culpan',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:FSMHX',
            label: 'Franklin Strategic Mortgage Por',
            score: 1,
          },
          {
            term: 'TICKER:KDDIF',
            label: 'KDDI CORPORATION',
            score: 1,
          },
          {
            term: 'TICKER:KDDIY',
            label: 'KDDI CORPORATION',
            score: 1,
          },
          {
            term: 'TICKER:NPPXF',
            label: 'NIPPON TEL & TEL CORP',
            score: 1,
          },
          {
            term: 'TICKER:NTTYY',
            label: 'NIPPON TEL & TEL CORP',
            score: 1,
          },
          {
            term: 'TICKER:RKUNF',
            label: 'RAKUTEN INC',
            score: 1,
          },
          {
            term: 'TICKER:RKUNY',
            label: 'RAKUTEN INC',
            score: 1,
          },
          {
            term: 'TICKER:SFBQF',
            label: 'SOFTBANK CORP.',
            score: 1,
          },
          {
            term: 'TICKER:SOBKY',
            label: 'SOFTBANK CORP. UNSPON ADS EACH ',
            score: 1,
          },
          {
            term: 'TICKER:YAHOF',
            label: 'Z HOLDINGS CORPORATION',
            score: 1,
          },
          {
            term: 'TICKER:YAHOY',
            label: 'Z HOLDINGS CORPORATION UNSP ADS',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p>(Bloomberg Opinion) -- Nippon Telegraph &amp; Telephone Corp.’s plan to buy out its NTT Docomo Inc. wireless unit would mark the end of an era for a&nbsp;company once hailed as the world’s leading mobile operator. It also signals a stark new reality in the telco business:&nbsp;that mere connectivity isn’t enough.</p>\n<p>Docomo said its&nbsp;board will meet Tuesday to consider NTT’s proposal. That seems moot: The parent already owns 66% of the subsidiary. It’s likely to offer&nbsp;30% more than the share price at&nbsp;yesterday’s close, the Nikkei newspaper reported earlier.&nbsp;That would be at the upper end of average premiums globally for telco deals valued at more than $5 billion in the past five years, according to data compiled by Bloomberg. Still, it’s&nbsp;worth noting that prior to the news Docomo had&nbsp;fallen 20% below its March high and is well below its 50-, 90- and 200-day averages.</p>\n<p>This month’s appointment of Yoshihide Suga as Japanese prime minister to succeed Shinzo Abe may have been a spur. Suga had been an outspoken critic of mobile data pricing before taking over the top job, and now forcing down tariffs has become an easy policy win. Going private would take Docomo out of the public spotlight as it renovates its business model and weathers that storm.</p>\n<p>Docomo’s struggle was apparent even before Suga rose to the top. More than two decades ago, it amazed the world with the release of i-Mode, a mobile internet service that allowed Japanese consumers to read email and surf the web during their morning commute. Apple Inc.’s first iPhone wouldn’t arrive for another eight years.</p>\n<p>I-Mode helped Docomo post annual revenue growth reaching as much as 26% and operating income gains of 42%, cementing its place as Japan’s No. 1&nbsp;wireless carrier. While the company has held onto that position, it has done so by cutting average revenue per user below levels at KDDI Corp. or Masayoshi Son’s SoftBank Corp., the first telco in Japan to sell the iPhone.</p>\n<p>Price wars with those rivals have hurt, even amid accusations that rates remain&nbsp;too high by global comparison. Docomo has maintained a respectable operating margin of around 20% in recent years (it dropped to 18.4% for the year to March 30 amid the Covid pandemic). Revenue and operating income growth have slowed to a crawl, though, lagging behind competitors.&nbsp;</p>\n<p>The reasons can be seen in its sales breakdown, with 80% still coming from mobile services. By comparison, SoftBank owns Yahoo Japan (via a subsidiary) and gets additional revenue from fixed-line businesses. Consumer and enterprise wireless service accounts for only about half of SoftBank’s sales. KDDI isn’t quite as diversified, yet it’s able to lean a little more on non-telecom businesses and is pushing its so-called “life design” services that include e-commerce, personal finance, entertainment and education.</p>\n<p>Then there’s Rakuten Inc., which recently entered the mobile&nbsp;business and promises to drive prices down even further. It’s doubtful whether the e-commerce company intends to make much profit from its wireless unit, instead using it as a loss-leader to drive online retail and related services.&nbsp;</p>\n<p>That leaves Docomo looking pedestrian as a purveyor of mobile connectivity, aka dumb pipes, like the former state-owned incumbent that it is. With the onerous costs of a 5G rollout looming and a price war set to escalate, the safest place may be back under the protection of its majority owner. Investors need not worry about NTT&nbsp;having to shield its subsidiary from public markets. A combined entity could leverage procurement, better integrate infrastructure and services, and streamline its balance sheet.&nbsp;</p>\n<p>Once the business is stabilized and profit growth returns, look for NTT to be the biggest&nbsp;winner from a future Docomo initial public offering.</p>\n<p>&nbsp;</p>\n<p>This column does not necessarily reflect the opinion of the editorial board or Bloomberg LP and its owners.</p>\n<p>Tim Culpan is a Bloomberg Opinion columnist covering technology. He previously covered technology for Bloomberg News.</p>\n<p>For more articles like this, please visit us at <a href="https://www.bloomberg.com/opinion">bloomberg.com/opinion</a></p>\n<p><a href="https://www.bloomberg.com/subscriptions/67obqkd5zdp5lj8/?utm_source=yahoo_usn">Subscribe now</a> to stay ahead with the most trusted business news source.</p>\n<p>©2020 Bloomberg L.P.</p>',
        streams: [],
        ignore_main_image: false,
        published_at: 1601346426,
        main_image: null,
        is_magazine: false,
        reference_id: '7aa82fef-4d1c-3408-b00e-efc5c9960411',
      },
      {
        uuid: '0c188866-a975-3e12-b99e-d4f2cd09a79a',
        title: '4 Underrated Tech Stocks',
        link:
          'https://www.fool.com/investing/2020/09/28/4-underrated-tech-stocks/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          "In this episode of Industry Focus: Tech, Dylan Lewis and Motley Fool contributor Brian Feroldi discuss four great tech stocks you can get for cheap.  To catch full episodes of all The Motley Fool's free podcasts, check out our podcast center.",
        publisher: 'Motley Fool',
        author: 'Brian Feroldi, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:AMZN',
            label: 'Amazon.com, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:BB',
            label: 'BlackBerry Limited',
            score: 1,
          },
          {
            term: 'TICKER:GOOGL',
            label: 'Alphabet Inc.',
            score: 1,
          },
          {
            term: 'TICKER:IBM',
            label: 'International Business Machines',
            score: 1,
          },
          {
            term: 'TICKER:INTC',
            label: 'Intel Corporation',
            score: 1,
          },
          {
            term: 'TICKER:MSFT',
            label: 'Microsoft Corporation',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601342520,
        main_image: null,
        is_magazine: false,
        reference_id: '0c188866-a975-3e12-b99e-d4f2cd09a79a',
      },
      {
        uuid: '5d0f2095-0fee-30e9-92dc-86ec21b689d0',
        title: 'Google to Collect 30% Cut on In-App Purchases Starting in 2021',
        link:
          'https://www.thestreet.com/investing/google-to-collect-30-cut-on-in-app-purchases-starting-in-2021?puc=yahoo&cm_ven=YAHOO&yptr=yahoo',
        summary:
          'Google already required developers to use its billing system for in-app purchases, but will begin enforcing the rule more strictly starting next year.',
        publisher: 'TheStreet.com',
        author: '',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOGL',
            label: 'Alphabet Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601331240,
        main_image: null,
        is_magazine: false,
        reference_id: '5d0f2095-0fee-30e9-92dc-86ec21b689d0',
      },
      {
        uuid: '0fbb0a1e-8f1b-3dec-b449-7cd9eeefd230',
        title: 'Apple Inc. stock rises Monday, outperforms market',
        link:
          'https://www.marketwatch.com/story/apple-inc-stock-rises-monday-outperforms-market-01601326346?siteid=yhoof2&yptr=yahoo',
        summary:
          'COMPANY CLOSE UPDATES  Terrence Horan Shares of Apple Inc. AAPL rallied 2.39% to $114.96 Monday, on what proved to be an all-around favorable trading session for the stock market, with the NASDAQ Composite Index COMP rising 1.',
        publisher: 'MarketWatch',
        author: 'MarketWatch Automation',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601326320,
        main_image: null,
        is_magazine: false,
        reference_id: '0fbb0a1e-8f1b-3dec-b449-7cd9eeefd230',
      },
      {
        uuid: '5c0c87a3-54e9-3d74-a47b-6ca4fa597266',
        title: 'Dow Jones Gains Over 400 Points While Nasdaq Leads; Chip Stocks Higher',
        link:
          'https://www.investors.com/market-trend/stock-market-today/dow-jones-gains-over-400-points-while-nasdaq-leads-chip-stocks-higher/?src=A00220&yptr=yahoo',
        summary:
          "The Dow Jones Industrial Average saw sizable gains in today's stock market, while the Nasdaq and S&P; 500 ended the day positive as well.",
        publisher: "Investor's Business Daily",
        author: 'RACHEL FOX',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:BA',
            label: 'Boeing Company (The)',
            score: 1,
          },
          {
            term: 'TICKER:CMG',
            label: 'Chipotle Mexican Grill, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:ENTG',
            label: 'Entegris, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:SNAP',
            label: 'Snap Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601325191,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 945,
              height: 533,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ltSiXwQxPsJEr4ZtW4snYA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/TQcagl7pYHbkxFjtqiLLlQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/28e88eac1c8027393a22cb7ae91a9299',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/bC4rKPM0l15TMfNl6xgPfg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/TQcagl7pYHbkxFjtqiLLlQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/28e88eac1c8027393a22cb7ae91a9299',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/qSyZmvk4RC2qeazMSeyB2g--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/TQcagl7pYHbkxFjtqiLLlQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/28e88eac1c8027393a22cb7ae91a9299',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/l.dOBlUlA5AuZHHijEnlQQ--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/TQcagl7pYHbkxFjtqiLLlQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/28e88eac1c8027393a22cb7ae91a9299',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 361,
              url:
                'https://s.yimg.com/uu/api/res/1.2/8yZgOb596k9HQKW7NDbOLQ--~B/Zmk9ZmlsbDtoPTM2MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/TQcagl7pYHbkxFjtqiLLlQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/28e88eac1c8027393a22cb7ae91a9299',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 361,
              url:
                'https://s.yimg.com/uu/api/res/1.2/8yZgOb596k9HQKW7NDbOLQ--~B/Zmk9ZmlsbDtoPTM2MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/TQcagl7pYHbkxFjtqiLLlQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/28e88eac1c8027393a22cb7ae91a9299',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/WB88QqCf13TB_P0Wrk_rpw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/TQcagl7pYHbkxFjtqiLLlQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/28e88eac1c8027393a22cb7ae91a9299',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 433,
              url:
                'https://s.yimg.com/uu/api/res/1.2/1131iXYX59bbxtijPy7L9Q--~B/Zmk9ZmlsbDtoPTQzMzt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/TQcagl7pYHbkxFjtqiLLlQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/28e88eac1c8027393a22cb7ae91a9299',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/wvX3wjkbPnNkNtbzDlPuLg--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/TQcagl7pYHbkxFjtqiLLlQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/28e88eac1c8027393a22cb7ae91a9299',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/wvX3wjkbPnNkNtbzDlPuLg--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/TQcagl7pYHbkxFjtqiLLlQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/28e88eac1c8027393a22cb7ae91a9299',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/FK1_shZ85J.G5QGf_MKW3Q--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/TQcagl7pYHbkxFjtqiLLlQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/28e88eac1c8027393a22cb7ae91a9299',
              tags: null,
            },
          ],
          original_height: 533,
          original_width: 945,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/ltSiXwQxPsJEr4ZtW4snYA--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/TQcagl7pYHbkxFjtqiLLlQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/28e88eac1c8027393a22cb7ae91a9299',
        },
        is_magazine: false,
        reference_id: '5c0c87a3-54e9-3d74-a47b-6ca4fa597266',
      },
      {
        uuid: 'a39e5960-7ad9-33cd-89e5-f8ba8a22e721',
        title: 'Stock market news live updates: Stocks jump, Dow gains 411 points',
        link:
          'https://finance.yahoo.com/news/stock-market-news-live-september-28-2020-113411585.html',
        summary:
          'Stocks jumped Monday, following global equities higher, as the major indices looked to recuperate some of their losses over the past several weeks.',
        publisher: 'Yahoo Finance',
        author: 'Emily McCormick',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:AMZN',
            label: 'Amazon.com, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:CCL',
            label: 'Carnival Corporation',
            score: 1,
          },
          {
            term: 'TICKER:CUK',
            label: 'Carnival Plc',
            score: 1,
          },
          {
            term: 'TICKER:CUKPF',
            label: 'CARNIVAL PLC',
            score: 1,
          },
          {
            term: 'TICKER:DAL',
            label: 'Delta Air Lines, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:ES=F',
            label: 'E-Mini S&P 500 Dec 20',
            score: 1,
          },
          {
            term: 'TICKER:FB',
            label: 'Facebook, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GSFPX',
            label: 'Goldman Sachs U.S. Equity Divid',
            score: 1,
          },
          {
            term: 'TICKER:INTC',
            label: 'Intel Corporation',
            score: 1,
          },
          {
            term: 'TICKER:MSFT',
            label: 'Microsoft Corporation',
            score: 1,
          },
          {
            term: 'TICKER:NQ=F',
            label: 'Nasdaq 100 Dec 20',
            score: 1,
          },
          {
            term: 'TICKER:NVDA',
            label: 'NVIDIA Corporation',
            score: 1,
          },
          {
            term: 'TICKER:PI7.F',
            label: 'PRIMERICA INC.  DL-,01',
            score: 1,
          },
          {
            term: 'TICKER:PMPRX',
            label: 'Principal Fds, Inc. MidCap Valu',
            score: 1,
          },
          {
            term: 'TICKER:QQQ',
            label: 'Invesco QQQ Trust, Series 1',
            score: 1,
          },
          {
            term: 'TICKER:UAL',
            label: 'United Continental Holdings, In',
            score: 1,
          },
          {
            term: 'TICKER:YM=F',
            label: 'Mini Dow Jones Indus.-$5 Dec 20',
            score: 1,
          },
          {
            term: 'TICKER:^GSPC',
            label: 'S&P 500',
            score: 1,
          },
          {
            term: 'TICKER:^IXIC',
            label: 'NASDAQ Composite',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p>Stocks jumped Monday, <a href="https://finance.yahoo.com/news/stock-market-report-28-september-ftse-cac-dax-sp-500-dow-nasdaq-hsbc-ping-an-073606980.html">following global equities higher,</a> as the major indices looked to recuperate some of their losses over the past several weeks.</p>\n<p><a href="https://finance.yahoo.com/news/stock-market-news-live-september-29-2020-222337246.html"><strong>[Click here to read what’s moving markets heading into Tuesday, September 29]</strong></a></p>\n<p>The Dow gained more than 400 points, or 1.5%, after the index posted its <a href="https://finance.yahoo.com/news/stock-market-news-live-september-25-2020-221412052.html">fourth straight weekly loss last week</a>. The S&amp;P 500 rose by more than 1.6%, as shares of Apple (<a href="https://finance.yahoo.com/quote/AAPL">AAPL</a>), Amazon (<a href="https://finance.yahoo.com/quote/AMZN?p=AMZN&amp;.tsrc=fin-srch">AMZN</a>), Facebook (<a href="https://finance.yahoo.com/quote/FB?p=FB&amp;.tsrc=fin-srch">FB</a>), Microsoft (<a href="https://finance.yahoo.com/quote/MSFT?p=MSFT&amp;.tsrc=fin-srch">MSFT</a>), and chipmakers including Nvidia (<a href="https://finance.yahoo.com/quote/NVDA?p=NVDA&amp;.tsrc=fin-srch">NVDA</a>), Intel (<a href="https://finance.yahoo.com/quote/INTC?p=INTC&amp;.tsrc=fin-srch">INTC</a>) and Advanced Micro Devices (<a href="https://finance.yahoo.com/quote/AMD?p=AMD&amp;.tsrc=fin-srch">AMD</a>) advanced. “Reopening” stocks including airlines like American Airlines (<a href="https://finance.yahoo.com/quote/AAL?p=AAL&amp;.tsrc=fin-srch">AAL</a>) and Delta (<a href="https://finance.yahoo.com/quote/DAL?p=DAL&amp;.tsrc=fin-srch">DAL</a>), and cruise lines including Carnival Cruise Line (<a href="https://finance.yahoo.com/quote/CCL?p=CCL&amp;.tsrc=fin-srch">CCL</a>) also rallied.</p>\n<p>Hopes that US lawmakers might still pass another coronavirus stimulus package before the November election helped buoy risk assets, with another round of relief set to provide support to individuals and businesses hardest hit by the pandemic.</p>\n<p>House Speaker Nancy Pelosi told CNN’s “State of the Union” on Sunday” that Democrats would soon unveil a new proposal of more than $2 trillion – a step down from the more than $3 trillion House Democrats had sought previously, but a figure still higher than the about $1.5 trillion the Trump administration suggested would be its upper bound for further virus-related relief measures.</p>\n<p>“A potential breakthrough in the impasse over COVID-19 related stimulus seems to have lifted markets. Given how far apart the two sides were, markets had all but given up on action prior the election; therefore, those expectations, which had been pricing in over the last week or so, are being unwound a bit today,” Jamie Cox, managing partner for Harris Financial Group, said in an email to Yahoo Finance.</p>\n<p>Earlier last week, Treasury Secretary Steven Mnuchin <a href="https://www.nytimes.com/live/2020/09/24/business/stock-market-today-coronavirus#mnuchin-and-pelosi-inch-toward-resuming-stimulus-talks-as-economy-continues-to-struggle">said he and Pelosi agreed to hold to more talks</a> to try and work out a deal.</p>\n<p>“When I have a conversation with the administration it is in good faith. I trust Secretary Mnuchin to represent something that can reach a solution, and I believe we can come to an agreement,” Pelosi<a href="https://www.cnn.com/world/live-news/coronavirus-pandemic-09-27-20-intl/index.html"> said during the interview with CNN on Sunday.</a></p>\n<p>Investors at least temporarily shrugged off concerns over a likely confirmation fight for the next Supreme Court justice. President Donald Trump named Judge Amy Coney Barrett as his now third nominee to the country’s highest court, with <a href="https://finance.yahoo.com/news/senate-republicans-ready-quick-push-100000368.html">Senate Republicans, </a>who hold a 53-47 majority in their chamber, suggesting they would move quickly to confirm her before the election, despite outcry from Democratic lawmakers.</p>\n<p>Elsewhere, incrementally more positive economic data out of China also boosted early sentiment on Monday. Industrial profits in the country surged<a href="https://uk.finance.yahoo.com/news/chinas-industrial-profits-grow-19-020742384.html"> 19.1% in August for a fourth straight monthly gain, </a>the country’s statistics bureau reported on Sunday, reflecting a sustained recovery in the economy of the country first hit by the pandemic.</p>\n<div> \n</div>\n<p>—</p>\n<h2><strong>4:03 p.m. ET: Stocks jump, Dow rises 411 points, or 1.5%, and Nasdaq rises 1.9%</strong></h2>\n<p>Here were the main moves in markets as of 4:03 p.m. ET:</p>\n<ul> \n <li><p><strong>S&amp;P 500 (</strong><a href="https://finance.yahoo.com/quote/%5EGSPC?p=%5EGSPC"><strong>^GSPC</strong></a><strong>)</strong>: +53.21 (+1.61%) to 3,351.67</p></li> \n <li><p><strong>Dow (</strong><a href="https://finance.yahoo.com/quote/%5EDJI?p=%5EDJI"><strong>^DJI</strong></a><strong>)</strong>: +410.36 (+1.51%) to 27,584.32</p></li> \n <li><p><strong>Nasdaq (</strong><a href="https://finance.yahoo.com/quote/%5EIXIC?p=%5EIXIC"><strong>^IXIC</strong></a><strong>)</strong>: +203.96 (+1.87%) to 11,117.53</p></li> \n <li><p><strong>Crude (</strong><a href="https://finance.yahoo.com/quote/CL=F?p=CL=F"><strong>CL=F</strong></a><strong>)</strong>: +$0.34 (+0.84%) to $40.59 a barrel</p></li> \n <li><p><strong>Gold (</strong><a href="https://finance.yahoo.com/quote/GC=F?p=GC=F"><strong>GC=F</strong></a><strong>)</strong>: +$19.40 (+1.04%) to $1,885.70 per ounce</p></li> \n <li><p><strong>10-year Treasury (</strong><a href="https://finance.yahoo.com/quote/%5ETNX?p=%5ETNX"><strong>^TNX</strong></a><strong>)</strong>: +0.4 bps to yield 0.6630%</p></li> \n</ul>\n<p>—</p>\n<h2>2:47 p.m. ET: Crude oil settles slightly higher as energy sector leads gains in S&amp;P 500</h2>\n<p>US crude oil prices (<a href="https://finance.yahoo.com/quote/CL=F?p=CL=F&amp;.tsrc=fin-srch">CL=F</a>) settled higher by 35 cents, or 0.9%, to $40.60 per barrel on Monday, following equities higher as hopes of fiscal stimulus helped at least partially offset ongoing fears over weakened demand trends during the coronavirus pandemic.</p>\n<p>The energy sector led gains in the S&amp;P 500, alongside other least-loved sectors so far for the year to date including financials and industrials. Dow component Chevron gained 3.5% in intraday trading.</p>\n<p>—</p>\n<h2>11:40 a.m. ET: Stocks hold sharply higher, Dow extends gains to 500 points</h2>\n<p>The three major indices held sharply higher Monday before noon, and the Dow extended its gain to more than 500 points, or 1.85%. Boeing led advances in the 30-stock index with a more than 6% rise, and each of Goldman Sachs, American Express and Dow Inc. rose at least 3%.</p>\n<p>The financials, industrials and materials sectors led gains in the S&amp;P 500, though all 11 major sectors were positive on the day. Big Tech shares jumped, recovering more declines from the past several weeks.</p>\n<p>—</p>\n<h2>10:51 a.m. ET: Texas factory activity rises to a near two-year high in September: Dallas Fed</h2>\n<p>Factory activity in Texas expanded more than expected in September from August, according to the Dallas Federal Reserve’s monthly manufacturing index.</p>\n<p>The Dallas Fed’s general business activity index rose to 13.6 in September from 8.0 in the previous month, topping expectations for 9.5, according to Bloomberg data. The index has now held in positive territory and risen for back-to-back months, following five consecutive months of negative readings. September’s print marked the index’s highest since November 2018.</p>\n<p>“Labor market measures indicated stronger employment growth and a continued increase in workweek length. The employment index pushed up from 10.6 to 14.5, suggesting more robust hiring,” the Dallas Fed added in its<a href="https://www.dallasfed.org/research/surveys/tmos/2020/2009.aspx"> September report.</a></p>\n<p>—</p>\n<h2>9:31 a.m. ET: Stocks open higher as markets shake off past weeks’ losses</h2>\n<p>Here were the main moves in markets, as of 9:31 a.m. ET:</p>\n<ul> \n <li><p><strong>S&amp;P 500 (</strong><a href="https://finance.yahoo.com/quote/%5EGSPC?p=%5EGSPC" class="link rapid-noclick-resp"><strong>^GSPC</strong></a><strong>)</strong>: +51.87 points (+1.6%) to 3,298.46</p></li> \n <li><p><strong>Dow (</strong><a href="https://finance.yahoo.com/quote/%5EDJI?p=%5EDJI" class="link rapid-noclick-resp"><strong>^DJI</strong></a><strong>)</strong>: +358.56 points (+1.34%) to 27,173.96</p></li> \n <li><p><strong>Nasdaq (</strong><a href="https://finance.yahoo.com/quote/%5EIXIC?p=%5EIXIC" class="link rapid-noclick-resp"><strong>^IXIC</strong></a><strong>)</strong>: +164.38 points (+1.55%) to 11,074.08</p></li> \n <li><p><strong>Crude (</strong><a href="https://finance.yahoo.com/quote/CL=F?p=CL=F" class="link rapid-noclick-resp"><strong>CL=F</strong></a><strong>)</strong>: +$0.37 (+0.92%) to $40.62 a barrel</p></li> \n <li><p><strong>Gold (</strong><a href="https://finance.yahoo.com/quote/GC=F?p=GC=F" class="link rapid-noclick-resp"><strong>GC=F</strong></a><strong>)</strong>: +$9.40 (+0.5%) to $1,875.70 per ounce</p></li> \n <li><p><strong>10-year Treasury (</strong><a href="https://finance.yahoo.com/quote/%5ETNX?p=%5ETNX" class="link rapid-noclick-resp"><strong>^TNX</strong></a><strong>)</strong>: unchanged to yield 0.659%</p></li> \n</ul>\n<p>—</p>\n<h2>7:31 a.m. ET Monday: Stocks point to a higher open</h2>\n<p>Here were the main moves in equity markets, as of 7:31 a.m. ET Monday:</p>\n<ul> \n <li><p><strong>S&amp;P 500 futures (</strong><a href="https://finance.yahoo.com/quote/ES=F?p=ES=F" class="link rapid-noclick-resp"><strong>ES=F</strong></a><strong>)</strong>: 3,328.5, up 1.25 points or 1.25%</p></li> \n <li><p><strong>Dow futures (</strong><a href="https://finance.yahoo.com/quote/YM=F?p=YM=F" class="link rapid-noclick-resp"><strong>YM=F</strong></a><strong>)</strong>: 27,378.00, up 335 points or 1.24%</p></li> \n <li><p><strong>Nasdaq futures (</strong><a href="https://finance.yahoo.com/quote/NQ=F?p=NQ=F" class="link rapid-noclick-resp"><strong>NQ=F</strong></a><strong>):</strong>&nbsp;11,315.00, up 178.5 points, or 1.6%</p></li> \n <li><p><strong>Crude (</strong><a href="https://finance.yahoo.com/quote/CL=F?p=CL=F" class="link rapid-noclick-resp"><strong>CL=F</strong></a><strong>)</strong>: +$0.05 points (+0.12%) to $40.30 a barrel</p></li> \n <li><p><strong>Gold (</strong><a href="https://finance.yahoo.com/quote/GC=F?p=GC=F" class="link rapid-noclick-resp"><strong>GC=F</strong></a><strong>)</strong>: -$5.60 (-0.3%) to $1,860.70 per ounce</p></li> \n <li><p><strong>10-year Treasury (</strong><a href="https://finance.yahoo.com/quote/%5ETNX?p=%5ETNX" class="link rapid-noclick-resp"><strong>^TNX</strong></a><strong>)</strong>: +1.5 bps to yield 0.674%</p></li> \n</ul>\n<figure>\n <img src="https://media-mbst-pub-ue1.s3.amazonaws.com/creatr-uploaded-images/2020-09/54053f40-017a-11eb-abcf-9be5d568b4a7" alt="Traders work on the floor at the closing bell of the Dow Industrial Average at the New York Stock Exchange on March 18, 2020 in New York. - Wall Street stocks plunged again March 18, 2020 as the economic toll from the coronavirus mounts and economists warn of a deep recession. The Dow Jones Industrial Average tumbled 6.3 percent, or more than 1,300 points, to close the day at 19,903.50. The index sank by as much as 10 percent earlier in the session, which saw trading halted yet again. (Photo by Bryan R. Smith / AFP) (Photo by BRYAN R. SMITH/AFP via Getty Images)" credit="BRYAN R. SMITH via Getty Images" crediturl="" width="4000" height="2667" data-ops=""> \n <figcaption>\n  Traders work on the floor at the closing bell of the Dow Industrial Average at the New York Stock Exchange on March 18, 2020 in New York. - Wall Street stocks plunged again March 18, 2020 as the economic toll from the coronavirus mounts and economists warn of a deep recession. The Dow Jones Industrial Average tumbled 6.3 percent, or more than 1,300 points, to close the day at 19,903.50. The index sank by as much as 10 percent earlier in the session, which saw trading halted yet again. (Photo by Bryan R. Smith / AFP) (Photo by BRYAN R. SMITH/AFP via Getty Images)\n </figcaption> \n</figure>\n<p>—</p>\n<p><strong>Follow Yahoo Finance on&nbsp;</strong><a href="https://twitter.com/YahooFinance"><strong>Twitter</strong></a><strong>,&nbsp;</strong><a href="https://www.facebook.com/yahoofinance/"><strong>Facebook</strong></a><strong>,&nbsp;</strong><a href="https://www.instagram.com/yahoofinance/?hl=en"><strong>Instagram</strong></a><strong>,&nbsp;</strong><a href="https://flipboard.com/topic/yahoofinance"><strong>Flipboard</strong></a><strong>,&nbsp;</strong><a href="https://www.linkedin.com/company/yahoo-finance"><strong>LinkedIn</strong></a><strong>, and&nbsp;</strong><a href="https://www.reddit.com/user/yahoofinance/"><strong>reddit</strong></a><strong>.</strong></p>\n<p><a href="https://finance.yahoo.com/"><strong>Find live stock market quotes and the latest business and finance news</strong></a></p>\n<p><a href="https://www.cashay.com/investing/stocks"><strong>For tutorials and information on investing and trading stocks, check out Cashay</strong></a></p>',
        streams: [
          {
            url:
              'https://video.media.yql.yahoo.com/v1/hls/47f59cd2-8f2d-302d-aab2-2cd5fec30c00.m3u8?region=US&site=finance',
            uuid: '47f59cd2-8f2d-302d-aab2-2cd5fec30c00',
            mime_type: 'application/vnd.apple.mpegURL',
          },
        ],
        ignore_main_image: false,
        published_at: 1601323520,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 4416,
              height: 2944,
              url:
                'https://s.yimg.com/uu/api/res/1.2/KciQbJ4XN3Y57L48aMgImw--~B/aD0yOTQ0O3c9NDQxNjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/2hrH9.Damaci19MDpZ3krg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait_retina',
              width: 1536,
              height: 1024,
              url:
                'https://s.yimg.com/uu/api/res/1.2/6g9H9W0FjF6GUHv.hPxblQ--~B/Zmk9ZmlsbDtoPTEwMjQ7dz0xNTM2O2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 213,
              url:
                'https://s.yimg.com/uu/api/res/1.2/HRKjR5PU_.s6uePMTUcRHw--~B/Zmk9ZmlsbDtoPTIxMzt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/35n6jZDNJrl3B9Navm8Yig--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/sfyMWrdMdE_j1UaY8gIOGw--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/sfyMWrdMdE_j1UaY8gIOGw--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/mso2XbJOVSAEnZnEGBpQ8Q--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 512,
              url:
                'https://s.yimg.com/uu/api/res/1.2/et19dOjI5PXSaCp1qJiEBQ--~B/Zmk9ZmlsbDtoPTUxMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/BszvYToe2xWHTuscaxjp9Q--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/BszvYToe2xWHTuscaxjp9Q--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 107,
              url:
                'https://s.yimg.com/uu/api/res/1.2/dEEedG3w4270DhyiG3OOsQ--~B/Zmk9ZmlsbDtoPTEwNzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
              tags: null,
            },
          ],
          original_height: 2944,
          original_width: 4416,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/KciQbJ4XN3Y57L48aMgImw--~B/aD0yOTQ0O3c9NDQxNjthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-images/2020-03/cb54a520-6ad2-11ea-bdd7-0489d3e42a2e',
        },
        is_magazine: false,
        reference_id: 'a39e5960-7ad9-33cd-89e5-f8ba8a22e721',
      },
      {
        uuid: '0bc27726-0777-36c1-8a59-170c79e7992f',
        title:
          'Amazon, Apple, Nvidia, Netflix, PayPal, ServiceNow: Who Got Cut Or Trimmed?',
        link:
          'https://www.investors.com/research/how-to-find-the-best-stocks-to-buy/stocks-to-watch-adjusting-positions-amazon-apple-nvidia-paypal-netflix-leaderboard-stocks/?src=A00220&yptr=yahoo',
        summary:
          "As the stock market corrects, here's a look adjustments in IBD Leaderboard to top stocks to watch like Apple, Nvidia, Amazon and PayPal.",
        publisher: "Investor's Business Daily",
        author: 'MATTHEW GALGANI',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:AMZN',
            label: 'Amazon.com, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:NFLX',
            label: 'Netflix, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:NVDA',
            label: 'NVIDIA Corporation',
            score: 1,
          },
          {
            term: 'TICKER:PYPL',
            label: 'PayPal Holdings, Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601322602,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 945,
              height: 533,
              url:
                'https://s.yimg.com/uu/api/res/1.2/hXUprFEXgVb6bNNFCNvHmQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/kkZLk3f4RexGrs2GyZOm4w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/2ebd62a5a03a26bfe045b1456c9aa2c5',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/t0I7u4R.jMqqytlBtjdyJQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/kkZLk3f4RexGrs2GyZOm4w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/2ebd62a5a03a26bfe045b1456c9aa2c5',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/6Bkgir1rj785v9XEA9y9lw--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/kkZLk3f4RexGrs2GyZOm4w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/2ebd62a5a03a26bfe045b1456c9aa2c5',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/t2baUKfzizrZK9FJwwzZaA--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/kkZLk3f4RexGrs2GyZOm4w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/2ebd62a5a03a26bfe045b1456c9aa2c5',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 361,
              url:
                'https://s.yimg.com/uu/api/res/1.2/yWQNLwV.Skkt6h_4CZ.N7g--~B/Zmk9ZmlsbDtoPTM2MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/kkZLk3f4RexGrs2GyZOm4w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/2ebd62a5a03a26bfe045b1456c9aa2c5',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 361,
              url:
                'https://s.yimg.com/uu/api/res/1.2/yWQNLwV.Skkt6h_4CZ.N7g--~B/Zmk9ZmlsbDtoPTM2MTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/kkZLk3f4RexGrs2GyZOm4w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/2ebd62a5a03a26bfe045b1456c9aa2c5',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/im3d.NgQRL8BRZmv3W6Epg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/kkZLk3f4RexGrs2GyZOm4w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/2ebd62a5a03a26bfe045b1456c9aa2c5',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 433,
              url:
                'https://s.yimg.com/uu/api/res/1.2/QysGUVgTdwxtYAsAQ3hX3w--~B/Zmk9ZmlsbDtoPTQzMzt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/kkZLk3f4RexGrs2GyZOm4w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/2ebd62a5a03a26bfe045b1456c9aa2c5',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/xorvDblNobM.cH6f23miMQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/kkZLk3f4RexGrs2GyZOm4w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/2ebd62a5a03a26bfe045b1456c9aa2c5',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/xorvDblNobM.cH6f23miMQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/kkZLk3f4RexGrs2GyZOm4w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/2ebd62a5a03a26bfe045b1456c9aa2c5',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/EJLjSDwXdeUB1SqmMteWFw--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/kkZLk3f4RexGrs2GyZOm4w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/2ebd62a5a03a26bfe045b1456c9aa2c5',
              tags: null,
            },
          ],
          original_height: 533,
          original_width: 945,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/hXUprFEXgVb6bNNFCNvHmQ--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/kkZLk3f4RexGrs2GyZOm4w--~B/aD01MzM7dz05NDU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en/ibd.com/2ebd62a5a03a26bfe045b1456c9aa2c5',
        },
        is_magazine: false,
        reference_id: '0bc27726-0777-36c1-8a59-170c79e7992f',
      },
      {
        uuid: '14ed8967-32dd-3a07-8353-b02bcc7e672d',
        title: 'Dow Jones Leads Major Indexes As Bulls Charge; These Breakouts Flourish',
        link:
          'https://www.investors.com/market-trend/stock-market-today/dow-jones-leads-major-indexes-bulls-charge-apple-stock-rallies-amid-breakouts/?src=A00220&yptr=yahoo',
        summary:
          'The Dow Jones led the major indexes as a bull charge continued. Apple stock also rallied, while a number of breakouts were flourishing.',
        publisher: "Investor's Business Daily",
        author: 'MICHAEL LARKIN',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:BA',
            label: 'Boeing Company (The)',
            score: 1,
          },
          {
            term: 'TICKER:DOW',
            label: 'Dow Inc.',
            score: 1,
          },
          {
            term: 'TICKER:TGT',
            label: 'Target Corporation',
            score: 1,
          },
          {
            term: 'TICKER:VEEV',
            label: 'Veeva Systems Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601321152,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1000,
              height: 563,
              url:
                'https://s.yimg.com/uu/api/res/1.2/rtCLIEsyHi.QhU83rZKc7g--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Tq27xcLX72lQjvd58R5KhQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/55e768668fc4923c94627149fdfbf4f0',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/f2fJHlLOJITHpkTsIYqXCA--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Tq27xcLX72lQjvd58R5KhQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/55e768668fc4923c94627149fdfbf4f0',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/XfHdPADbds8rQtQndA76dA--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/Tq27xcLX72lQjvd58R5KhQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/55e768668fc4923c94627149fdfbf4f0',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/w40_0.WMhQO6Eyw6adhIug--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/Tq27xcLX72lQjvd58R5KhQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/55e768668fc4923c94627149fdfbf4f0',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/MvNSrXPjOeErpv3gxyTakg--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/Tq27xcLX72lQjvd58R5KhQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/55e768668fc4923c94627149fdfbf4f0',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/MvNSrXPjOeErpv3gxyTakg--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/Tq27xcLX72lQjvd58R5KhQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/55e768668fc4923c94627149fdfbf4f0',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/vffMZ3qHCkGitZN4TMjIRg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Tq27xcLX72lQjvd58R5KhQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/55e768668fc4923c94627149fdfbf4f0',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 432,
              url:
                'https://s.yimg.com/uu/api/res/1.2/RlE_Rc4zfoGsbe7AwloLgQ--~B/Zmk9ZmlsbDtoPTQzMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/Tq27xcLX72lQjvd58R5KhQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/55e768668fc4923c94627149fdfbf4f0',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/JzH_oJepsoj3G_8LVoRxJQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Tq27xcLX72lQjvd58R5KhQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/55e768668fc4923c94627149fdfbf4f0',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/JzH_oJepsoj3G_8LVoRxJQ--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Tq27xcLX72lQjvd58R5KhQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/55e768668fc4923c94627149fdfbf4f0',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/YG.JiXMsuk7NF2i7pUMQYQ--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Tq27xcLX72lQjvd58R5KhQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/55e768668fc4923c94627149fdfbf4f0',
              tags: null,
            },
          ],
          original_height: 563,
          original_width: 1000,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/rtCLIEsyHi.QhU83rZKc7g--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/Tq27xcLX72lQjvd58R5KhQ--~B/aD01NjM7dz0xMDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en/ibd.com/55e768668fc4923c94627149fdfbf4f0',
        },
        is_magazine: false,
        reference_id: '14ed8967-32dd-3a07-8353-b02bcc7e672d',
      },
      {
        uuid: 'aff719db-7897-3725-80f4-ee30fc12cb6d',
        title: 'Google Tries to Find an App Store Fix After Fortnite Rift',
        link:
          'https://finance.yahoo.com/news/google-easier-more-app-stores-170428920.html',
        summary:
          '(Bloomberg) -- Alphabet Inc.’s Google is updating its Android software, which powers most of the world’s smartphones, to make it easier for consumers to use other app stores that compete with its own. If consumers do use Google’s Play app store, though, the company is making clear to developers that it will take a cut of many in-app payments. This increased enforcement of an existing rule may mean major developers including Netflix Inc., Spotify Technology SA and Match Group Inc., end up paying more.Epic Games Inc. pulled its popular Fortnite game from Google and Apple Inc.’s app stores recently to protest what it said are high fees and restrictive rules for developers. Both Google and Apple take up to a 30% commission of most transactions.While Apple only allows its own app store on iPhones, Google’s model is different. The search giant provides Android free to handset makers, such as Samsung Electronics Co., in exchange for getting Google’s search, app store and other services pre-installed prominently on the devices. Those deals were the subject of major fines in Europe, for violating antitrust law, and are now under the microscope in the U.S.Read more: Google’s Search Business Targeted in U.S. Antitrust CasePhone makers, mobile carriers and even some game developers, like Epic, run their own app stores. But, on Android phones, they must compete with Google’s digital storefront for attention.In a Monday blog post, Google vice president Sameer Samat said next year’s version of the operating system -- Android 12 -- will “make it even easier for people to use other app stores on their devices.” Samat and the company didn’t elaborate.The blog post also clarified that Google will tighten requirements that apps downloaded from Google’s store must use the company’s billing system. That means developers must give the internet giant a cut of as much as 30% of many app-related payments. About 3% of apps currently evade the charge, Samat wrote. Google said it is giving these developers a year to comply.Bloomberg News reported on this effort last week. Developers including Netflix, Spotify and Match have circumvented the charge.Read more: Google to Increase Push for Apps to Give Cut of In-App Purchases(Updates with Google executive comment in sixth paragraph.)For more articles like this, please visit us at bloomberg.comSubscribe now to stay ahead with the most trusted business news source.©2020 Bloomberg L.P.',
        publisher: 'Bloomberg',
        author: 'Mark Bergen',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOG',
            label: 'Alphabet Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GOOGL',
            label: 'Alphabet Inc.',
            score: 1,
          },
          {
            term: 'TICKER:IAC',
            label: 'IAC/InterActiveCorp',
            score: 1,
          },
          {
            term: 'TICKER:MTCH',
            label: 'Match Group, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:NFLX',
            label: 'Netflix, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:SPOT',
            label: 'Spotify Technology S.A.',
            score: 1,
          },
          {
            term: 'TICKER:SSNLF',
            label: '',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p>(Bloomberg) -- Alphabet Inc.’s Google is updating its Android software, which powers most of the world’s smartphones, to make it easier for consumers to use other app stores that compete with its own. </p>\n<p>If consumers do use Google’s Play app store, though, the company is making clear to developers that it will take a cut of many in-app payments. This increased enforcement of an existing rule may mean major developers including Netflix Inc., Spotify Technology SA and Match Group Inc., end up paying more.</p>\n<p>Epic Games Inc. pulled its popular Fortnite game from Google and Apple Inc.’s app stores recently to protest what it said are high fees and restrictive rules for developers. Both Google and Apple take up to a 30% commission of most transactions.</p>\n<p>While Apple only allows its own app store on iPhones, Google’s model is different. The search giant provides Android free to handset makers, such as Samsung Electronics Co., in exchange for getting Google’s search, app store and other services pre-installed prominently on the devices. Those deals were the subject of major fines in Europe, for violating antitrust law, and are now under the microscope in the U.S.</p>\n<p>Read more: Google’s Search Business Targeted in U.S. Antitrust Case</p>\n<p>Phone makers, mobile carriers and even some game developers, like Epic, run their own app stores. But, on Android phones, they must compete with Google’s digital storefront for attention.</p>\n<p>In a Monday blog post, Google vice president Sameer Samat said next year’s version of the operating system -- Android 12 -- will “make it even easier for people to use other app stores on their devices.” Samat and the company didn’t elaborate.</p>\n<p>The blog post also clarified that Google will tighten requirements that apps downloaded from Google’s store must use the company’s billing system. That means developers must give the internet giant a cut of as much as 30% of many app-related payments. About 3% of apps currently evade the charge, Samat wrote. Google said it is giving these developers a year to comply.</p>\n<p>Bloomberg News reported on this effort last week. Developers including Netflix, Spotify and Match have circumvented the charge.</p>\n<p>Read more: Google to Increase Push for Apps to Give Cut of In-App Purchases</p>\n<p>(Updates with Google executive comment in sixth paragraph.)</p>\n<p>For more articles like this, please visit us at <a href="https://www.bloomberg.com">bloomberg.com</a></p>\n<p><a href="https://www.bloomberg.com/subscriptions/67obqkd5zdp5lj8/?utm_source=yahoo_usn">Subscribe now</a> to stay ahead with the most trusted business news source.</p>\n<p>©2020 Bloomberg L.P.</p>',
        streams: [],
        ignore_main_image: false,
        published_at: 1601317816,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 2000,
              height: 1335,
              url:
                'https://s.yimg.com/uu/api/res/1.2/RT0Uy_vKJliQ.UH7UkYiSw--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/NPKDGeA1eLIjfyqrM1v9Vg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait_retina',
              width: 1536,
              height: 1025,
              url:
                'https://s.yimg.com/uu/api/res/1.2/5hoQZKx2n0OKZqI8RurEWQ--~B/Zmk9ZmlsbDtoPTEwMjU7dz0xNTM2O2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 214,
              url:
                'https://s.yimg.com/uu/api/res/1.2/c1ubGkuIqHPizOs2B.NxvQ--~B/Zmk9ZmlsbDtoPTIxNDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/b_5yiEaozm1oXzptEl_LTg--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/86Q9mwkBlrtEHbT1T929LA--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/86Q9mwkBlrtEHbT1T929LA--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/qAqv2cNuqMDA8G.QkPKnPw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 513,
              url:
                'https://s.yimg.com/uu/api/res/1.2/D3zLN.UYM8lScH6ua.UcPQ--~B/Zmk9ZmlsbDtoPTUxMzt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/mikLRrUUB7oQouxEmKFM7Q--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/mikLRrUUB7oQouxEmKFM7Q--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 107,
              url:
                'https://s.yimg.com/uu/api/res/1.2/TrtOAzOcHi8ClTGcQh9xLQ--~B/Zmk9ZmlsbDtoPTEwNzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
              tags: null,
            },
          ],
          original_height: 1335,
          original_width: 2000,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/RT0Uy_vKJliQ.UH7UkYiSw--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/GAk4FokVVKTQxFOwJxevYQ--~B/aD0xMzM1O3c9MjAwMDthcHBpZD15dGFjaHlvbg--/https://media.zenfs.com/en/bloomberg_technology_68/a2bfd14186272249d3e5b88527142e18',
        },
        is_magazine: false,
        reference_id: 'aff719db-7897-3725-80f4-ee30fc12cb6d',
      },
      {
        uuid: '6b9b8f4f-0df4-3ca0-a952-d75ef7537a05',
        title: "Why Apple's Rumored Mini iPhone Could Be a Masterstroke",
        link:
          'https://www.fool.com/investing/2020/09/28/why-apple-rumored-mini-iphone-could-be-masterstoke/?source=eptyholnk0000202&utm_source=yahoo-host&utm_medium=feed&utm_campaign=article&yptr=yahoo',
        summary:
          'The iPhone maker could have a winner in its upcoming smartphone portfolio if this rumor turns out to be true.',
        publisher: 'Motley Fool',
        author: 'Harsh Chauhan, The Motley Fool',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601317272,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1400,
              height: 933,
              url:
                'https://s.yimg.com/uu/api/res/1.2/LV4cVUDwLf_Rs70mcHIUVg--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/2A33_ERNqB8yrUoWvDmxfw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/7e5fcc0d256dec156837b89eb1499810',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/2S5so3pq7tQPut4Li0jlhw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/2A33_ERNqB8yrUoWvDmxfw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/7e5fcc0d256dec156837b89eb1499810',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 213,
              url:
                'https://s.yimg.com/uu/api/res/1.2/J0xxEA5Wdy0pQelaFVs9qw--~B/Zmk9ZmlsbDtoPTIxMzt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/2A33_ERNqB8yrUoWvDmxfw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/7e5fcc0d256dec156837b89eb1499810',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/hPkDEuYJIOaSJeJ9cdyeIA--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/2A33_ERNqB8yrUoWvDmxfw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/7e5fcc0d256dec156837b89eb1499810',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/vQrhrzKzrbXjpqgdzDeWtA--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/2A33_ERNqB8yrUoWvDmxfw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/7e5fcc0d256dec156837b89eb1499810',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 427,
              url:
                'https://s.yimg.com/uu/api/res/1.2/vQrhrzKzrbXjpqgdzDeWtA--~B/Zmk9ZmlsbDtoPTQyNzt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/2A33_ERNqB8yrUoWvDmxfw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/7e5fcc0d256dec156837b89eb1499810',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/PZtAmCHvj_rc09JA5Yz2yw--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/2A33_ERNqB8yrUoWvDmxfw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/7e5fcc0d256dec156837b89eb1499810',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 512,
              url:
                'https://s.yimg.com/uu/api/res/1.2/0UfPV9qbTQMiuY8fhJfsfA--~B/Zmk9ZmlsbDtoPTUxMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/2A33_ERNqB8yrUoWvDmxfw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/7e5fcc0d256dec156837b89eb1499810',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/vjPJLD3pLaGPTDDgmsl6SA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/2A33_ERNqB8yrUoWvDmxfw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/7e5fcc0d256dec156837b89eb1499810',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/vjPJLD3pLaGPTDDgmsl6SA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/2A33_ERNqB8yrUoWvDmxfw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/7e5fcc0d256dec156837b89eb1499810',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 107,
              url:
                'https://s.yimg.com/uu/api/res/1.2/q8STk93BessDnwt2Qvt8kA--~B/Zmk9ZmlsbDtoPTEwNzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/2A33_ERNqB8yrUoWvDmxfw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/7e5fcc0d256dec156837b89eb1499810',
              tags: null,
            },
          ],
          original_height: 933,
          original_width: 1400,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/LV4cVUDwLf_Rs70mcHIUVg--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/2A33_ERNqB8yrUoWvDmxfw--~B/aD05MzM7dz0xNDAwO2FwcGlkPXl0YWNoeW9u/https://media.zenfs.com/en-us/motleyfool.com/7e5fcc0d256dec156837b89eb1499810',
        },
        is_magazine: false,
        reference_id: '6b9b8f4f-0df4-3ca0-a952-d75ef7537a05',
      },
      {
        uuid: 'dc05c591-f209-3e39-85c7-84a0469027d3',
        title: 'Roku Launches New Hardware and Software, Adds Apple Protocol Support',
        link:
          'https://www.thestreet.com/investing/roku-launches-new-hardware-and-software-adds-apple-protocol-support?puc=yahoo&cm_ven=YAHOO&yptr=yahoo',
        summary:
          "Roku's newest OS version lets Apple-device users stream content via the AirPlay 2 protocol, and control Roku devices via the Home app and Siri.",
        publisher: 'TheStreet.com',
        author: '',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: true,
        content: null,
        streams: [],
        ignore_main_image: false,
        published_at: 1601316900,
        main_image: null,
        is_magazine: false,
        reference_id: 'dc05c591-f209-3e39-85c7-84a0469027d3',
      },
      {
        uuid: 'e9d09df9-227b-3275-8487-1f00c471d24e',
        title: '4 reasons why October could stink for the stock market, too',
        link:
          'https://finance.yahoo.com/news/4-reasons-why-october-could-stink-for-the-stock-market-too-170115506.html',
        summary:
          'Before you buy the dip in the markets in the latter stages of September, consider these key risks on the plate for October.',
        publisher: 'Yahoo Finance',
        author: 'Brian Sozzi',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:GSFPX',
            label: 'Goldman Sachs U.S. Equity Divid',
            score: 1,
          },
          {
            term: 'TICKER:NFLX',
            label: 'Netflix, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:PI7.F',
            label: 'PRIMERICA INC.  DL-,01',
            score: 1,
          },
          {
            term: 'TICKER:^GSPC',
            label: 'S&P 500',
            score: 1,
          },
          {
            term: 'TICKER:^IXIC',
            label: 'NASDAQ Composite',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p>Queue “We’ve Only Just Begun” from The Carpenters.</p>\n<p>After a September that has seen the Dow Jones Industrial Average, S&amp;P 500 and Nasdaq Composite drop by more than 5% on average — paced by weakness in high-flying tech names such as Apple and Netflix — October is shaping up to be no walk in the park either, <a href="https://finance.yahoo.com/show/firsttrade">strategists warn</a>.</p>\n<p>“In short, uncertainty has rarely been higher for financial markets,” said Morgan Stanley strategist <a href="https://finance.yahoo.com/news/how-wall-street-strategists-make-sense-of-stock-market-selloff-morning-brief-100145915.html">Mike Wilson</a> in a new note to clients on Monday. Wilson — known on Wall Street for his uncanny ability to predict major market moves — <a href="http://finance.yahoo.com/premium-marketing?ncid=editoriald_yhm5ec0oo8o">thinks the S&amp;P 500 and Nasdaq 100</a> could fall another 6% and 14%, respectively, in the near-term.</p>\n<p>Here are Wilson’s four areas of concern for October. Proceed with caution into the new month, dip-buyers.</p>\n<h2>Concern #1: The U.S. fiscal cliff</h2>\n<p>Although the markets have staged solid rallies over the past two sessions on speculation lawmakers will ink a new round of stimulus soon, the reality is that economic data shows the economic recovery from the <a href="https://news.yahoo.com/coronavirus">COVID-19 pandemic</a> lows has stalled absent more fiscal help.</p>\n<p>In turn, that dynamic could worsen in October — especially if lawmakers can’t agree on new stimulus weeks removed from a <a href="https://www.yahoo.com/elections">contentious presidential election on Nov. 3</a>.</p>\n<p>With Congress embroiled in election year politics, and a tussle over when to fill the Supreme Court vacancy, the odds of CARES 2 getting passed before Nov. 3 have dropped considerably,” warns Wilson.</p>\n<h2>Concern #2: COVID-19 second wave</h2>\n<p>The grim numbers on <a href="https://news.yahoo.com/coronavirus">COVID-19</a> persist and in some cases, are worsening globally following relaxed social distancing requirements. Globally, there have been more than 33.1 million confirmed COVID-19 cases. The global death toll now stands at 998,000, according to data from Johns Hopkins University.</p>\n<p>Lately, the rising number of COVID-19 cases has spurred concerns on Wall Street of a second wave of infections this winter as people are indoors. It’s unclear what economic impact that second wave would have on an already battered global economy, but Wilson and others think it’s a big enough risk for stocks for investors to pay attention.</p>\n<p>Says Wilson, “Until we know exactly what it looks like, further lockdowns here remain a real risk, particularly given the role they could play in deciding the outcome of the U.S. elections.”</p>\n<h2>Concern #3: The Federal Reserve is a known quantity</h2>\n<p>By now, the <a href="https://finance.yahoo.com/video/finance/yahoo-finance-presents-york-federal-193022310.html">Federal Reserve has telegraphed</a> its next moves on interest rates — no moves for the foreseeable future as a means to help the economic recovery. With the diminishing prospect for further upside surprises from Fed policy this year — which markets always love — Wilson believes stocks have lost a key catalyst.</p>\n<p>“Real long-term interest rates appear to have bottomed as rates markets accept what the Fed has been saying all summer about <a href="https://finance.yahoo.com/video/finance/yahoo-finance-presents-york-federal-193022310.html">yield curve control</a>,” points out Wilson.</p>\n<h2>Concern #4: The election</h2>\n<p>Suffice it to say, the presidential election between incumbent Donald Trump and former vice president Joe Biden is not your average one. <a href="https://www.yahoo.com/elections">The fact that the election outcome</a> may not be known on Nov. 3 is a big risk to markets, contends Wilson.</p>\n<p>Writes Wilson, “Can the ballots be counted in a timely fashion? Can the mail-in process be trusted? What about potential meddling via powerful social networks? 2020 has been an unusual year to say the least, and the election is the cherry on top.”</p>\n<p><a href="https://www.yahoo.com/author/brian-sozzi/" class="link rapid-noclick-resp"><em><strong>Brian Sozzi</strong></em></a><em><strong>&nbsp;is an editor-at-large and co-anchor of&nbsp;</strong></em><a href="https://finance.yahoo.com/show/firsttrade" class="link rapid-noclick-resp"><em><strong>The First Trade</strong></em></a><em><strong>&nbsp;at Yahoo Finance. Follow Sozzi on Twitter&nbsp;</strong></em><a href="https://twitter.com/BrianSozzi" class="link rapid-noclick-resp"><em><strong>@BrianSozzi</strong></em></a><em><strong>&nbsp;and on&nbsp;</strong></em><a href="https://www.linkedin.com/in/briansozzi/" class="link rapid-noclick-resp"><em><strong>LinkedIn</strong></em></a><em><strong>.</strong></em></p>\n<p><strong>What’s hot this week from Sozzi:</strong></p>\n<ul> \n <li><p><a href="https://finance.yahoo.com/news/pelotons-rival-tonal-raised-110-million-from-atheletes-like-stephen-curry-120041855.html"><strong>Peloton’s biggest rival just raised a ton of money from the likes of Stephen Curry</strong></a></p></li> \n</ul>\n<ul> \n <li><p><a href="https://finance.yahoo.com/news/home-depot-cofounder-and-atlanta-falcons-owners-best-advice-for-new-york-mets-owner-steve-cohen-161515632.html"><strong>Home Depot co-founder and Atlanta Falcons owner gives his best advice to new NY Mets owner</strong></a></p></li> \n <li><p><a href="https://finance.yahoo.com/news/peloton-founder-big-15-year-goal-130451826.html"><strong>Peloton founder: here’s one of my biggest 15 year goals</strong></a></p></li> \n <li><p><a href="https://finance.yahoo.com/video/vitamin-shoppe-ceo-covid-19-142400219.html"><strong>Vitamin Shoppe CEO: the pandemic has changed our business</strong></a></p></li> \n <li><p><a href="https://finance.yahoo.com/news/kraft-heinz-ceo-warren-buffetts-top-two-lieutenants-on-our-board-liked-our-32-billion-deal-153151409.html"><strong>Kraft Heinz CEO: Buffett’s team like our $3.2 billion deal</strong></a></p></li> \n <li><p><a href="https://finance.yahoo.com/news/kroger-ceo-covid-19-pandemic-has-changed-how-we-shop-for-food-160447841.html"><strong>Kroger CEO: this is how we see the future of food shopping</strong></a></p></li> \n</ul>\n<p><em><strong>Watch Yahoo Finance’s live programming on </strong></em><a href="https://www.facebook.com/yahoofinance/posts/yahoo-finance-is-live-on-verizon-fios-channel-604-watch-247-bell-to-bell-live-ma/3015619208448976/"><em><strong>Verizon FIOS channel 604</strong></em></a><em><strong>, </strong></em><a href="https://finance.yahoo.com/news/yahoo-finance-now-available-apple-tv-120428076.html"><em><strong>Apple TV</strong></em></a><em><strong>, </strong></em><a href="https://finance.yahoo.com/news/yahoo-finance-now-available-apple-tv-120428076.html"><em><strong>Amazon Fire TV</strong></em></a><em><strong>, </strong></em><a href="https://finance.yahoo.com/news/yahoo-finance-now-available-apple-tv-120428076.html"><em><strong>Roku</strong></em></a><em><strong>, Samsung TV, Pluto TV, and </strong></em><a href="https://www.youtube.com/watch?v=FGSOVAYWYNA"><em><strong>YouTube</strong></em></a><em><strong>. Online catch Yahoo Finance on </strong></em><a href="https://twitter.com/YahooFinance"><em><strong>Twitter</strong></em></a><em><strong>, </strong></em><a href="https://www.facebook.com/yahoofinance/"><em><strong>Facebook</strong></em></a><em><strong>, </strong></em><a href="https://www.instagram.com/yahoofinance/?hl=en"><em><strong>Instagram</strong></em></a><em><strong>, </strong></em><a href="https://flipboard.com/topic/yahoofinance"><em><strong>Flipboard</strong></em></a><em><strong>, </strong></em><a href="https://b.smartnews.be/sr/22KpZt3f1a6FAmNimBiSnzqADfTE1m2w3q3o69J"><em><strong>SmartNews</strong></em></a><em><strong>, </strong></em><a href="https://www.linkedin.com/company/yahoo-finance"><em><strong>LinkedIn</strong></em></a><em><strong>, and </strong></em><a href="https://www.reddit.com/user/yahoofinance/"><em><strong>reddit</strong></em></a><em><strong>.</strong></em></p>',
        streams: [
          {
            url:
              'https://video.media.yql.yahoo.com/v1/hls/3b44539e-19ea-36fd-9562-a4070001cb90.m3u8?region=US&site=finance',
            uuid: '3b44539e-19ea-36fd-9562-a4070001cb90',
            mime_type: 'application/vnd.apple.mpegURL',
          },
        ],
        ignore_main_image: false,
        published_at: 1601312475,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 3500,
              height: 2508,
              url:
                'https://s.yimg.com/uu/api/res/1.2/8AkUs589o25XLMzDE6F6og--~B/aD0yNTA4O3c9MzUwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/rJzkXAZosZ4OpyMfAi7u7A--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait_retina',
              width: 1536,
              height: 1101,
              url:
                'https://s.yimg.com/uu/api/res/1.2/bswGF32_fIC9xHsOCjCSqA--~B/Zmk9ZmlsbDtoPTExMDE7dz0xNTM2O2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 229,
              url:
                'https://s.yimg.com/uu/api/res/1.2/gQVpLUmoebB4Dy7qtKmbnw--~B/Zmk9ZmlsbDtoPTIyOTt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/9JJcPZ1yiBUdOvKLVcJntA--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 459,
              url:
                'https://s.yimg.com/uu/api/res/1.2/KDjSNH9iC844ooX8zy9VYw--~B/Zmk9ZmlsbDtoPTQ1OTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 459,
              url:
                'https://s.yimg.com/uu/api/res/1.2/KDjSNH9iC844ooX8zy9VYw--~B/Zmk9ZmlsbDtoPTQ1OTt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/yqnXCol2XKHE_h9wdNsB2Q--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 550,
              url:
                'https://s.yimg.com/uu/api/res/1.2/cdD3wWCHrgWndL.z08_6SA--~B/Zmk9ZmlsbDtoPTU1MDt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/bG0.jQLes9XkgPzyBF3LaA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/bG0.jQLes9XkgPzyBF3LaA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 115,
              url:
                'https://s.yimg.com/uu/api/res/1.2/q0qzlq1Nn4S3GI6fInjiQA--~B/Zmk9ZmlsbDtoPTExNTt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
              tags: null,
            },
          ],
          original_height: 2508,
          original_width: 3500,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/8AkUs589o25XLMzDE6F6og--~B/aD0yNTA4O3c9MzUwMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/31ea4380-01a5-11eb-b47f-623dbb5bb8a9',
        },
        is_magazine: false,
        reference_id: 'e9d09df9-227b-3275-8487-1f00c471d24e',
      },
      {
        uuid: '5cdda1d8-e1bd-39db-bd1b-92280725c270',
        title: 'The Zacks Analyst Blog Highlights: Apple, Amazon and Microsoft',
        link:
          'https://finance.yahoo.com/news/zacks-analyst-blog-highlights-apple-141002993.html',
        summary: 'The Zacks Analyst Blog Highlights: Apple, Amazon and Microsoft',
        publisher: 'Zacks',
        author: 'Zacks Equity Research',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:AMZN',
            label: 'Amazon.com, Inc.',
            score: 1,
          },
          {
            term: 'TICKER:MSFT',
            label: 'Microsoft Corporation',
            score: 1,
          },
          {
            term: 'TICKER:^GSPC',
            label: 'S&P 500',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<h3 style="text-align:justify;">For Immediate Release</h3>\n<p style="text-align:justify;">Chicago, IL – September 30, 2020 – Zacks.com announces the list of stocks featured in the Analyst Blog. Every day the Zacks Equity Research analysts discuss the latest news and events impacting stocks and the financial markets. Stocks recently featured in the blog include: Apple Inc. AAPL, Amazon.com, Inc. AMZN and Microsoft Corporation MSFT.</p>\n<h3 style="text-align:justify;">Here are highlights from Tuesday’s Analyst Blog:</h3>\n<h3 style="text-align:justify;"><em>The 3 Tech Giants Driving the 2020 Stock Market</em></h3>\n<p style="text-align:justify;">We have finally come to one of the most anticipated and what will likely be one of the most entertaining events of 2020, the Presidential debate between candidate Joe Biden and the incumbent President Donald Trump. Grab your popcorn because if nothing else, this debate is going to be entertaining to watch. Tune in at 9 P.M. ET.</p>\n<p style="text-align:justify;">The markets are getting pre-debate jitters today, letting go of some of yesterday\'s gains, and leaving room for market action tomorrow. Almost every sector traded lower today, with the exception of communication services.</p>\n<p style="text-align:justify;">The fear index, aka the VIX, is elevated back up off August\'s lull. Investors and traders are back at the edge of their seats in anticipation of what changes this election may bring to the equity markets. Still, the trend in market fear remains downward sloping from its peak in March.</p>\n<h3 style="text-align:justify;">Recent Stock Activity&nbsp;</h3>\n<p style="text-align:justify;">The S&amp;P 500 bounced hard off the 3,200 resistance-level, a level we haven\'t seen since July, surging roughly 5% from the lows last Thursday to the 50-day moving average (3,360) this morning, which has become a new resistance level. Today we broke down this resistance.</p>\n<p style="text-align:justify;">The S&amp;P 500 remains over 7% off its highs in early September, heading back down towards correction territory (10% or more off recent highs).</p>\n<p style="text-align:justify;"><u>Tech Tech Tech&nbsp;</u></p>\n<p style="text-align:justify;">Tech has been the market driver in 2020, a year that will become synonymous with change. These three musketeers of tech have gained almost as much value in 2020 as the entire 505 stock index has appreciated combined in this unprecedented year of trading.</p>\n<p style="text-align:justify;">The trillion-dollar trio has brought more than $1.7 billion in value to the S&amp;P 500 in 2020, which can attribute about 80% of this index\'s total returns.</p>\n<p style="text-align:justify;">These outsized returns should come as no surprise. Many of the S&amp;P 500 stocks remain down for the year as the US economy crawls its way out of a recession. There has been a massive disparity of gains across the stock market sectors.</p>\n<p style="text-align:justify;">Tech has been juiced-up by the massive digital shift that economies around the world had to adapt to stay operational while controlling COVID-19. Our immediate necessity for cloud-computing, e-commerce on an enormous scale, and other digital platforms transformed the technology space into a secular sector, which appears to keep growing no matter the economic climate.</p>\n<p style="text-align:justify;">Sectors that are still yet to fully recover include travel &amp; leisure, banks, energy, along with other cyclical value spaces.&nbsp;</p>\n<p style="text-align:justify;">Tech has undoubtedly driven this new bull market from the March lows, but will it be able to keep us buoyant through what has already begun to be a turbulent election season? Uncertainties remained elevated for the remainder of 2020.</p>\n<h3 style="text-align:justify;">The Level Check</h3>\n<p style="text-align:justify;"><u>S&amp;P 500</u></p>\n<p style="text-align:justify;">Like I discussed earlier, the S&amp;P 500 came up to its 50-day moving average at close last night but broke down this morning. The breakdown was led by this year\'s cyclical underperformers like financials, industrials, and energy.</p>\n<p style="text-align:justify;">I circled in red the two critical levels to watch out for in this election season. We are struggling to break through the 50-day (orange line) at 3,360 and are now looking at the 200-day (blue line) as a robust support level at 3,110. If the 200-day is reached, I believe it would mark the end of this \'turn of the season\' correction.</p>\n<p style="text-align:justify;">The yellow line represents a support level around 3,200 that we bounced off last Thursday. This level represented a battleground between the bulls and bears throughout July.</p>\n<p style="text-align:justify;"><u>Nasdaq 100</u></p>\n<p style="text-align:justify;">This innovation-driven index has been able to get above its 50-day moving average this week and remains relatively buoyant in trading today, despite the market\'s inflated anxiety. There aren\'t any Nasdaq 100 specific indicators that I want to point out right now, but I think it would be useful to take a look at charts from its 3 most substantial holdings.</p>\n<h3 style="text-align:justify;">The Big Three</h3>\n<p style="text-align:justify;">AAPL, AMZN, and MSFT are the three largest publicly traded enterprises in the world, making up 35% of the Nasdaq 100 and over 17% of the S&amp;P 500. These three tech behemoths are market-moving equities and are worth examining on a technical level, as \'reasonable\' valuations become increasingly ambiguous.</p>\n<h3 style="text-align:justify;">Apple</h3>\n<p style="text-align:justify;">AAPL is the quintessential US tech stock that everyone has in their portfolio, whether through direct investment or ETF holdings. Apple is the fruit that keeps on giving as investors begin to realize that they can\'t afford not to have AAPL in their portfolios. Apple has added $693 million in market value so far this year.</p>\n<p style="text-align:justify;">Yes, Apple is undoubtedly a tech force to be reckoned with, but is the stock market\'s valuation push of these shares justified? The company broke the $1 trillion market cap milestone about 1-year ago, and already the stock has surged past $2 trillion earlier this month.</p>\n<p style="text-align:justify;">The concerning part about this move is that, while the stock has appreciated 100% in value over the past year, its price/earnings valuation has seen almost the same growth. This means that the majority of AAPL\'s price action in the past 52-weeks (and beyond) has been merely a valuation push. There are multiple fundamental explanations for this like ultra-low interest rate, investors forced up the risk ladder, as well as mere FOMO.</p>\n<p style="text-align:justify;">Enough about my apprehension with this enterprise\'s fundamental value, let\'s examine the technical side. AAPL is the only one of this tech trio that remains above its 50-day moving average (orange line). As you can see from my chart below, this stock keeps blowing past my Fibonacci retracement levels. The 4-to-1 stock split at the end of August led to a massive surge of retail investors &amp; traders into these shares, seeing AAPL as \'cheaper,\' when in reality, it\'s never been more expensive on a valuation basis.</p>\n<p style="text-align:justify;">AAPL has marginally corrected itself in early September, but I wouldn\'t consider buying this stock until it drops below $100. I don\'t think it will likely break all the down to its 200-day moving average (blue line) at around $85, but if it does, I will be down there ready to pick these shares up.</p>\n<h3 style="text-align:justify;">Amazon</h3>\n<p style="text-align:justify;">This stock has been the largest pandemic beneficiary of the bunch, having appreciated over 66% year-to-date. AMZN hit its 50-day (blue line) this morning then broke down, unable to break through this resistance level. I like this stock and will be considering a purchase if it breaks below $3,000 a share. $2,500 would be the level that I will be banging my fists on the table to buy if we can get down there again.&nbsp;</p>\n<p style="text-align:justify;">If AMZN can break through its 50-day moving average, I think the stock has a further upside going into its highly anticipated Prime Day (October 13th – 4th).</p>\n<p style="text-align:justify;">The global pandemic provided America\'s e-com and cloud-computing market leader with the perfect storm, as society is conditioned to rely on this technology more than ever. Check out my recent article for more color on the subject:&nbsp;<strong>The Prime Day Effect: Will Amazon Deliver Returns?</strong></p>\n<h3 style="text-align:justify;">Microsoft</h3>\n<p style="text-align:justify;">MSFT has tracked the Nasdaq 100 quite closely, yet still outperforming at 30%+ growth in 2020, while yielding an over 1% dividend. I am a big advocate of Microsoft, an enterprise that continues to stay ahead of the innovative curve for decades on end. The brainchild of esteemed Bill Gates remains the world\'s software king with its enormously successful shift to cloud-computing.</p>\n<p style="text-align:justify;">MSFT is a stock that I believe every portfolio needs exposure to. This business is undoubtedly going to remain a cloud-computing leader through the roaring 20s.</p>\n<p style="text-align:justify;">As far as its technicals go, MSFT is in the same boat as most of the market: sitting right below its 50-day moving average. I personally don\'t mind the stock price today but will likely wait to add to my position until it breaks through the $200 level again.</p>\n<h3 style="text-align:justify;">Final Thoughts</h3>\n<p style="text-align:justify;">This debate will likely focus on the coronavirus, civil unrest, and economic disparities during this unprecedented global pandemic. I hope we can get some market-moving action from this, and I hope it is to the downside. The more the market drops, the riper buying opportunities become.</p>\n<p style="text-align:justify;">I will be keeping my eye on my market levels, the tech giants I discussed above, as well as a wish list of stock I have authored. Look out for my stock pick wish list in a subsequent article.</p>\n<h3 style="text-align:justify;">Just Released: Zacks’ 7 Best Stocks for Today</h3>\n<p style="text-align:justify;">Experts extracted 7 stocks from the list of 220 Zacks Rank #1 Strong Buys that has beaten the market more than 2X over with a stunning average gain of +24.3% per year.</p>\n<p style="text-align:justify;">These 7 were selected because of their superior potential for immediate breakout.</p>\n<p style="text-align:justify;"><strong>See these time-sensitive tickers now &gt;&gt;</strong></p>\n<p style="text-align:justify;">Media Contact</p>\n<p style="text-align:justify;">Zacks Investment Research</p>\n<p style="text-align:justify;">800-767-3771 ext. 9339</p>\n<p style="text-align:justify;">support@zacks.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\n<p style="text-align:justify;">https://www.zacks.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\n<p style="text-align:justify;">&nbsp;</p>\n<p style="text-align:justify;">Past performance is no guarantee of future results. Inherent in any investment is the potential for loss<strong>. </strong>This material is being provided for informational purposes only and nothing herein constitutes investment, legal, accounting or tax advice, or a recommendation to buy, sell or hold a security. No recommendation or advice is being given as to whether any investment is suitable for a particular investor. It should not be assumed&nbsp;that any investments in securities, companies, sectors or markets identified and described were or will be profitable. All information is current as of the date of herein and&nbsp;is subject to change without notice. Any views or opinions expressed may not reflect those of the firm as a whole. Zacks Investment Research does not engage in investment banking, market making or asset management activities of any securities. These returns are from hypothetical portfolios consisting of stocks with Zacks Rank = 1 that were rebalanced monthly with zero transaction costs. These are not the returns of actual portfolios of stocks. The S&amp;P 500 is an unmanaged index. Visit https://www.zacks.com/performance for information about the performance numbers displayed in this press release.</p>\n<br>Want the latest recommendations from Zacks Investment Research? Today, you can download 7 Best Stocks for the Next 30 Days. \n<a href="https://www.zacks.com/registration/pfp/?ALERT=RPT_7BST_LP194&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_PRESS_RELEASES&amp;cid=CS-YAHOO-FT-press_releases-1069271" target="_blank">Click to get this free report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&amp;d_alert=ZER_CONF&amp;t=MSFT&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_PRESS_RELEASES&amp;cid=CS-YAHOO-FT-press_releases-1069271">Microsoft Corporation (MSFT) : Free Stock Analysis Report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&amp;d_alert=ZER_CONF&amp;t=AMZN&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_PRESS_RELEASES&amp;cid=CS-YAHOO-FT-press_releases-1069271">Amazon.com, Inc. (AMZN) : Free Stock Analysis Report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&amp;d_alert=ZER_CONF&amp;t=AAPL&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_PRESS_RELEASES&amp;cid=CS-YAHOO-FT-press_releases-1069271">Apple Inc. (AAPL) : Free Stock Analysis Report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/stock/news/1069271/the-zacks-analyst-blog-highlights-apple-amazon-and-microsoft?cid=CS-YAHOO-FT-press_releases-1069271">To read this article on Zacks.com click here.</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/">Zacks Investment Research</a>',
        streams: [],
        ignore_main_image: false,
        published_at: 1601475002,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 635,
              height: 400,
              url:
                'https://s.yimg.com/uu/api/res/1.2/imXHW2If4CMhfN2ibskALg--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/uqOSVQi.jAVd_9AW0NWUSQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/0fe6ab239880650f75fb7142e2647c18',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/dhm6SubZILLnwn2aboWsUA--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/uqOSVQi.jAVd_9AW0NWUSQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/0fe6ab239880650f75fb7142e2647c18',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 202,
              url:
                'https://s.yimg.com/uu/api/res/1.2/oHfRQPAtkTB0ft_kPf0NNg--~B/Zmk9ZmlsbDtoPTIwMjt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/uqOSVQi.jAVd_9AW0NWUSQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/0fe6ab239880650f75fb7142e2647c18',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/OoFxi0pgpmAhHqIKr4oJ4Q--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/uqOSVQi.jAVd_9AW0NWUSQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/0fe6ab239880650f75fb7142e2647c18',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/OoFxi0pgpmAhHqIKr4oJ4Q--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/uqOSVQi.jAVd_9AW0NWUSQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/0fe6ab239880650f75fb7142e2647c18',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 101,
              url:
                'https://s.yimg.com/uu/api/res/1.2/CmT87.O3XtdCOQpmIMK3Hg--~B/Zmk9ZmlsbDtoPTEwMTt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/uqOSVQi.jAVd_9AW0NWUSQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/0fe6ab239880650f75fb7142e2647c18',
              tags: null,
            },
          ],
          original_height: 400,
          original_width: 635,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/imXHW2If4CMhfN2ibskALg--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/uqOSVQi.jAVd_9AW0NWUSQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/0fe6ab239880650f75fb7142e2647c18',
        },
        is_magazine: false,
        reference_id: '5cdda1d8-e1bd-39db-bd1b-92280725c270',
      },
      {
        uuid: 'f65a8526-f67a-3e4b-9e75-e9fb06272858',
        title: 'The 3 Tech Giants That Are Driving The 2020 Stock Market',
        link: 'https://finance.yahoo.com/news/3-tech-giants-driving-2020-214009521.html',
        summary: 'The 3 Tech Giants That Are Driving The 2020 Stock Market',
        publisher: 'Zacks',
        author: 'Daniel Laboe',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:MSFT',
            label: 'Microsoft Corporation',
            score: 1,
          },
          {
            term: 'TICKER:^GSPC',
            label: 'S&P 500',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<p>We have finally come to one of the most anticipated and what will likely be one of the most entertaining events of 2020, the Presidential debate between candidate Joe Biden and the incumbent President Donald Trump. Grab your popcorn because if nothing else, this debate is going to be entertaining to watch. Tune in at 9 P.M. ET.</p>\n<p>The markets are getting pre-debate jitters today, letting go of some of yesterday\'s gains, and leaving room for market action tomorrow. Almost every sector traded lower today, with the exception of communication services.</p>\n<p>The fear index, aka the VIX, is elevated back up off August\'s lull. Investors and traders are back at the edge of their seats in anticipation of what changes this election may bring to the equity markets. Still, the trend in market fear remains downward sloping from its peak in March.</p>\n<p><strong>Recent Stock Activity&nbsp;</strong></p>\n<p>The S&amp;P 500 bounced hard off the 3,200 resistance-level, a level we haven\'t seen since July, surging roughly 5% from the lows last Thursday to the 50-day moving average (3,360) this morning, which has become a new resistance level. Today we broke down off this resistance.</p>\n<p>The S&amp;P 500 remains over 7% off its highs in early September, heading back down towards correction territory (10% or more off recent highs).</p>\n<p><u>Tech Tech Tech&nbsp;</u></p>\n<p>Tech has been the market driver in 2020, a year that will become synonymous with change. Apple (AAPL), Amazon (AMZN), and Microsoft (MSFT) catalyzing much of the markets surge from the March lows. The three musketeers of tech have gained almost as much value in 2020 as the entire 505 stock index has appreciated combined in this unprecedented year of trading.</p>\n<p><img alt="" src="https://s.yimg.com/uu/api/res/1.2/MGLBioOP9eaqVfbfExopwA--/cT03NTthcHBpZD15dmlkZW9mZWVkczs-/https://media.zenfs.com/en-us/zacks.com/ce52cca48fa202ea59a3b6da61f5451e" style="width:620px;height:378px;"></p>\n<p>The trillion-dollar trio has brought more than $1.7 billion in value to the S&amp;P 500 in 2020, which can attribute about 80% of this index\'s total returns.</p>\n<p>These outsized returns should come as no surprise. Many of the S&amp;P 500 stocks remain down for the year as the US economy crawls its way out of a recession. There has been massive disparity of gains across the stock market sectors.</p>\n<p>Tech has been juiced-up by the massive digital shift that economies around the world had to adapt to stay operational while controlling COVID-19. Our immediate necessity for cloud-computing, e-commerce on an enormous scale, and other digital platforms transformed the technology space into a secular sector, which appears to keep growing no matter the economic climate.</p>\n<p>Sectors that are still yet to fully recover include travel &amp; leisure, banks, energy, along with other cyclical value spaces.&nbsp;</p>\n<p>Tech has undoubtedly driven this new bull market from the March lows, but will it be able to keep us buoyant through what has already begun to be a turbulent election season? Uncertainties remained elevated for the remainder of 2020.</p>\n<p><strong>The Level Check</strong></p>\n<p><u>S&amp;P 500</u></p>\n<p>Like I discussed earlier, the S&amp;P 500 came up to its 50-day moving average at close last night but broke down this morning. The break down was led by this year\'s cyclical underperformers like financials, industrials, and energy.</p>\n<p>I circled in red the two critical levels to watch out for in this election season. We are struggling to break through the 50-day (orange line) at 3,360 and are now looking at the 200-day (blue line) as a robust support level at 3,110. If the 200-day is reached, I believe it would mark the end of this \'turn of the season\' correction.</p>\n<p>The yellow line represents a support level around 3,200 that we bounced off last Thursday. This level represented a battleground between the bulls and bears throughout July, which you can see below.</p>\n<p><img alt="" src="https://s.yimg.com/uu/api/res/1.2/oSV8sIeGnvgMcE8gCFeSPA--/cT03NTthcHBpZD15dmlkZW9mZWVkczs-/https://media.zenfs.com/en-us/zacks.com/a5003ac721eba37277d2ba1c343197b6" style="width:620px;height:322px;"></p>\n<p><u>Nasdaq 100</u></p>\n<p>This innovation-driven index has been able to get above its 50-day moving average this week and remains relatively buoyant in trading today, despite the market\'s inflated anxiety. There aren\'t any Nasdaq 100 specific indicators that I want to point out right now, but I think it would be useful to take a look at charts from its 3 most substantial holdings.</p>\n<p><strong>The Big Three</strong></p>\n<p>AAPL, AMZN, and MSFT are the three largest publicly traded enterprises in the world, making up 35% of the Nasdaq 100 and over 17% of the S&amp;P 500. These three tech behemoths are market-moving equities and are worth examining on a technical level, as \'reasonable\' valuations become increasingly ambiguous.</p>\n<p><u>Apple (AAPL)</u></p>\n<p>AAPL is the quintessential US tech stock that everyone has in their portfolio, whether through direct investment or ETF holdings. Apple is the fruit that keeps on giving as investors begin to realize that they can\'t afford not to have AAPL in their portfolios. Apple has added $693 million in market value so far this year.</p>\n<p>Yes, Apple is undoubtedly a tech force to be reckoned with, but is the stock market\'s valuation push of these shares justified? The company broke the $1 trillion market cap milestone about 1-year ago, and already the stock has surged past $2 trillion earlier this month.</p>\n<p>The concerning part about this move is that, while the stock has appreciated 100% in value over the past year, its price/earnings valuation has seen almost the same growth. This means that the majority of AAPL\'s price action in the past 52-weeks (and beyond) has been merely a valuation push. There are multiple fundamental explanations for this like ultra-low interest rate, investors forced up the risk ladder, as well as mere FOMO.</p>\n<p>Enough about my apprehension with this enterprise\'s fundamental value, let\'s examine the technical side. AAPL is the only one of this tech trio that remains above its 50-day moving average (orange line). As you can see from my chart below, this stock keeps blowing past my Fibonacci retracement levels. The 4-to-1 stock split at the end of August led to a massive surge of retail investors &amp; traders into these shares, seeing AAPL as \'cheaper,\' when in reality, it\'s never been more expensive on a valuation basis.</p>\n<p>AAPL has marginally corrected itself in early September, but I wouldn\'t consider buying this stock until it drops below $100. I don\'t think it will likely break all the down to its 200-day moving average (blue line) at around $85, but if it does, I will be down there ready to pick these shares up.</p>\n<p><img alt="" src="https://s1.yimg.com/uu/api/res/1.2/mhubclRK3e0tV9wYFNOazA--/cT03NTthcHBpZD15dmlkZW9mZWVkczs-/https://media.zenfs.com/en-us/zacks.com/ebd5edb78ff8ebdb9380a9a6e4a9fb2e" style="width:620px;height:326px;"></p>\n<p><u>Amazon (AMZN)</u></p>\n<p>This stock has been the largest pandemic beneficiary of the bunch, having appreciated over 66% year-to-date. AMZN hit its 50-day (blue line) this morning then broke down, unable to break through this resistance level. I like this stock and will be considering a purchase if it breaks below $3,000 a share. $2,500 would be the level that I will be banging my fists on the table to buy if we can get down there again.&nbsp;</p>\n<p>If AMZN can break through its 50-day moving average, I think the stock has a further upside going into its highly anticipated Prime Day (October 13th – 4th).</p>\n<p><img alt="" src="https://s1.yimg.com/uu/api/res/1.2/H7XE5UR6GzuC6RjMRySlPg--/cT03NTthcHBpZD15dmlkZW9mZWVkczs-/https://media.zenfs.com/en-us/zacks.com/a9cfd98f57c0ab772fccbc8b6d45e463" style="width:620px;height:338px;"></p>\n<p>The global pandemic provided America\'s e-com and cloud-computing market leader with the perfect storm, as society is conditioned to rely on this technology more than ever. Check out my recent article for more color on the subject:&nbsp;<strong>The Prime Day Effect: Will Amazon Deliver Returns?</strong></p>\n<p><u>Microsoft (MSFT)</u></p>\n<p>MSFT has tracked the Nasdaq 100 quiet closely, yet still outperforming at 30%+ growth in 2020, while yielding an over 1% dividend. I am a big advocate of Microsoft, an enterprise that continues to stay ahead of the innovative curve for decades on end. The brainchild of esteemed Bill Gates remains the world\'s software king with its enormously successful shift to cloud-computing.</p>\n<p>MSFT is a stock that I believe every portfolio needs exposure to. This business is undoubtedly going to remain a cloud-computing leader through the roaring 20s.</p>\n<p>As far as its technicals go, MSFT is in the same boat as most of the market: sitting right below its 50-day moving average. I personally don\'t mind the stock price today but will likely wait to add to my position until it breaks through the $200 level again.</p>\n<p><img alt="" src="https://s1.yimg.com/uu/api/res/1.2/SDC_gRqY6Ls9HsTaoXIMUw--/cT03NTthcHBpZD15dmlkZW9mZWVkczs-/https://media.zenfs.com/en-us/zacks.com/fa39f67b8df26bba897ee41f0ef80f45" style="width:620px;height:325px;"></p>\n<p><img alt="" src="https://staticx-tuner.zacks.com/images/zadmin_tuner_image/msft 9_29.png"><strong>Final Thoughts</strong></p>\n<p>This debate will likely focus on the coronavirus, civil unrest, and economic disparities during this unprecedented global pandemic. I hope we can get some market-moving action from this, and I hope it is to the downside. The more the market drops, the riper buying opportunities become.</p>\n<p>I will be keeping my eye on my market levels, the tech giants I discussed above, as well as a wish list of stock I have authored. Look out for my stock pick wish list in a subsequent article.</p>\n<p><strong>Just Released: Zacks’ 7 Best Stocks for Today<br><br></strong>Experts extracted 7 stocks from the list of 220 Zacks Rank #1 Strong Buys that has beaten the market more than 2X over with a stunning average gain of +24.3% per year.<br><br>These 7 were selected because of their superior potential for immediate breakout.<br><br><strong>See these time-sensitive tickers now &gt;&gt;</strong></p>\n<br>Want the latest recommendations from Zacks Investment Research? Today, you can download 7 Best Stocks for the Next 30 Days. \n<a href="https://www.zacks.com/registration/pfp/?ALERT=RPT_7BST_LP194&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_INVESTMENT_IDEAS&amp;cid=CS-YAHOO-FT-investment_ideas-1068912" target="_blank">Click to get this free report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&amp;d_alert=ZER_CONF&amp;t=MSFT&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_INVESTMENT_IDEAS&amp;cid=CS-YAHOO-FT-investment_ideas-1068912">Microsoft Corporation (MSFT) : Free Stock Analysis Report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&amp;d_alert=ZER_CONF&amp;t=AMZN&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_INVESTMENT_IDEAS&amp;cid=CS-YAHOO-FT-investment_ideas-1068912">Amazon.com, Inc. (AMZN) : Free Stock Analysis Report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&amp;d_alert=ZER_CONF&amp;t=AAPL&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_INVESTMENT_IDEAS&amp;cid=CS-YAHOO-FT-investment_ideas-1068912">Apple Inc. (AAPL) : Free Stock Analysis Report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/commentary/1068912/the-3-tech-giants-that-are-driving-the-2020-stock-market?cid=CS-YAHOO-FT-investment_ideas-1068912">To read this article on Zacks.com click here.</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/">Zacks Investment Research</a>',
        streams: [],
        ignore_main_image: false,
        published_at: 1601415609,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 635,
              height: 400,
              url:
                'https://s.yimg.com/uu/api/res/1.2/cCZk6UdQnK92zMVo.tWRNQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/qb4F6.Jq0wYF7nGuzVezKQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/c90d397558e300afa547b11c9fe82be2',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/AZfKsvRUGuyC8EH4dAbPeQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/qb4F6.Jq0wYF7nGuzVezKQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/c90d397558e300afa547b11c9fe82be2',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 202,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Xb2SYar.2LvcY.2GwGBmBg--~B/Zmk9ZmlsbDtoPTIwMjt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/qb4F6.Jq0wYF7nGuzVezKQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/c90d397558e300afa547b11c9fe82be2',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/t.9hh8J6reDJUQgbsv84Bg--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/qb4F6.Jq0wYF7nGuzVezKQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/c90d397558e300afa547b11c9fe82be2',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/t.9hh8J6reDJUQgbsv84Bg--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/qb4F6.Jq0wYF7nGuzVezKQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/c90d397558e300afa547b11c9fe82be2',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 101,
              url:
                'https://s.yimg.com/uu/api/res/1.2/gSvqFg5WTO37uIxN45A63w--~B/Zmk9ZmlsbDtoPTEwMTt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/qb4F6.Jq0wYF7nGuzVezKQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/c90d397558e300afa547b11c9fe82be2',
              tags: null,
            },
          ],
          original_height: 400,
          original_width: 635,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/cCZk6UdQnK92zMVo.tWRNQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/qb4F6.Jq0wYF7nGuzVezKQ--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/c90d397558e300afa547b11c9fe82be2',
        },
        is_magazine: false,
        reference_id: 'f65a8526-f67a-3e4b-9e75-e9fb06272858',
      },
      {
        uuid: '4749e245-d0ff-3599-9ca0-74842150d63d',
        title:
          'The Zacks Analyst Blog Highlights: Dow, Salesforce, Apple, Walmart and UnitedHealth',
        link:
          'https://finance.yahoo.com/news/zacks-analyst-blog-highlights-dow-102510127.html',
        summary:
          'The Zacks Analyst Blog Highlights: Dow, Salesforce, Apple, Walmart and UnitedHealth',
        publisher: 'Zacks',
        author: 'Zacks Equity Research',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
          {
            term: 'TICKER:DOW',
            label: 'Dow Inc.',
            score: 1,
          },
          {
            term: 'TICKER:UNH',
            label: 'UnitedHealth Group Incorporated',
            score: 1,
          },
          {
            term: 'TICKER:WMMVY',
            label: 'WAL-MART DE MEXICO SAB DE CV',
            score: 1,
          },
          {
            term: 'TICKER:^GSPC',
            label: 'S&P 500',
            score: 1,
          },
        ],
        offnet: false,
        content:
          '<h3 style="text-align:justify;">For Immediate Release</h3>\n<p style="text-align:justify;">Chicago, IL – September 29, 2020 – Zacks.com announces the list of stocks featured in the Analyst Blog. Every day the Zacks Equity Research analysts discuss the latest news and events impacting stocks and the financial markets. Stocks recently featured in the blog include: Dow Inc. DOW, salesforce.com.inc. CRM, Apple Inc. AAPL, Walmart Inc. WMT and UnitedHealth Group Inc. UNH</p>\n<h3 style="text-align:justify;">Here are highlights from Monday’s Analyst Blog:</h3>\n<h3 style="text-align:justify;"><em>Top Dow Stocks to Boost Your Portfolio in a Capricious Market</em></h3>\n<p style="text-align:justify;">Just three days of trading are left in September and the myth about the month’s volatility is likely to have repeated this year too. This year, not only is history being repeated but also a storm is blowing, making investment decisions extremely hard for market participants.</p>\n<p style="text-align:justify;">Notably, the Dow and the S&amp;P 500 have recorded four consecutive weeks of loss. This has happened for the first time since August 2019. Meanwhile, the Nasdaq Composite managed to exit correction territory on Sep 25.</p>\n<p style="text-align:justify;">The stock-market volatility is likely to continue in the days to come. Despite an unpredictable market, six Dow stocks with a favorable Zacks Rank are likely to provide solid returns in the near term. These stocks are currently available at attractive valuations. Investment in these stocks at this juncture is likely to be prudent.</p>\n<h3 style="text-align:justify;">Markets Likely to Remain Volatile</h3>\n<p style="text-align:justify;">Wall Street is expected to continue fluctuating in the near future primarily due to a spike in new coronavirus cases in several countries of Europe and some states in the United States, lack of vaccine or a line of treatment for&nbsp;COVID-19, uncertainty regarding a fresh round of fiscal stimulus from the U.S. government, intensifying geo-political conflict between the United States and China, and the U.S. presidential election scheduled on Nov 3.</p>\n<p style="text-align:justify;">This is evident from the COBE VIX reading&nbsp;— popularly known as the best fear-gauge of Wall Street. In a nutshell, the VIX indicates the market\'s expectation of a 30-day forward-looking volatility based on the near-term S&amp;P 500 Index options (both puts and calls).</p>\n<p style="text-align:justify;">Notably, VIX is currently hovering in the range of 25 to 30 while it was in the range of 21 to 23 in mid-August and surged around 35 to 36 in mid-September. At its current level, the fear gauge is well above its last year\'s average range of 12 to 15 and its long-term reading around 20.</p>\n<p style="text-align:justify;">At its current level of 26.38, the VIX is higher than its 50-day moving average of 25.14. In financial literature, the 50-day moving average line is generally recognized as the short-term trend setter. This clearly indicates that the market will remain volatile and stocks will swing widely in either direction in the near future. &nbsp;</p>\n<h3 style="text-align:justify;">Our Top Picks</h3>\n<p style="text-align:justify;">We have narrowed down our search to five Dow stocks with strong short-term and long-term (3-5 years) growth potential. All these stocks witnessed robust earnings estimate revisions in the last 7 to 60 days, indicating solid business prospects. Each of our picks carries either a Zacks Rank #1 (Strong Buy) or 2 (Buy). You can see&nbsp;<strong>the complete list of today’s Zacks #1 Rank stocks here</strong>.</p>\n<p style="text-align:justify;"><strong>Dow </strong>provides various materials science solutions for consumer care, infrastructure, and packaging markets in the United States, Canada, Europe, the Middle East, Africa, India, the Asia Pacific, and Latin America. It operates through the Packaging &amp; Specialty Plastics, Industrial Intermediates &amp; Infrastructure, and Performance Materials and Coatings segments. Dow is investing in several high-return growth projects including the expansion of downstream silicones capacity.</p>\n<p style="text-align:justify;">Although the company\'s current-year expected earnings growth rate is negative, it has an estimated earnings growth of more than 100% for the next year. The Zacks Consensus Estimate for the current-year and next year has improved 4.3% and 2.2%, respectively in the last 7 days. This Zacks Rank #1 company has a long-term growth rate of 5%. The stock is currently trading at a 22.2% discount to its 52-week high price of $56.25 recorded on Nov 11, 2019.</p>\n<p style="text-align:justify;"><strong>salesforce</strong>is the leading provider of on-demand Customer Relationship Management software, which enables organizations to better manage critical operations such as sales force automation, customer service and support, marketing automation, document management, analytics and custom application development.</p>\n<p style="text-align:justify;">The Zacks Rank #1 company has an expected earnings growth rate of 25.1% for the current year (ending January 2021). Its long-term growth rate is 18%. The Zacks Consensus Estimate for the current year has improved by 1.4% over the last 30 days. The stock is currently trading at a 17.2% discount to its 52-week high price of $284.50 recorded on Sep 2.</p>\n<p style="text-align:justify;"><strong>Apple </strong>designs, manufactures and sells iPhone, iPad, iPod, Apple TV, Mac personal computers, Apple Watch, HomePod and AirPods. These devices are powered by the iOS, macOS, watchOS and tvOS operating systems.</p>\n<p style="text-align:justify;">The Zacks Rank #2 company has an expected earnings growth rate of 9.1% for the current year (ending September 2020). Its long-term growth rate is 10.7%. The Zacks Consensus Estimate for the current year has improved 0.3% over the last 30 days. The stock is currently trading at a 22.9% discount to its 52-week high price of $137.98 recorded on Sep 2. &nbsp;</p>\n<p style="text-align:justify;"><strong>Walmart </strong>operates retail stores, restaurants, discount stores, supermarkets, supercenters, hypermarkets, warehouse clubs, apparel stores, Sam’s Clubs, and NeighborhoodMarkets, as well as the websites,&nbsp;walmart.com&nbsp;and&nbsp;samsclub.com.</p>\n<p style="text-align:justify;">The Zacks Rank #2 company has an expected earnings growth rate of 8.5% for the current year (ending January 2021). Its long-term growth rate is 5.6%. The Zacks Consensus Estimate for the current year has improved 1.3% over the last 7 days. The stock is currently trading at a 10.2% discount to its 52-week high price of $151.33 recorded on Sep 2. &nbsp;</p>\n<p style="text-align:justify;"><strong>UnitedHealth Group </strong>is the largest health care services company globally, serving over 50 million individuals in the United States and over 5 million internationally. It operates through four segments: UnitedHealthcare, OptumHealth, OptumInsight, and OptumRx.</p>\n<p style="text-align:justify;">The Zacks Rank #2 company has an expected earnings growth rate of 9.7% for the current year. Its long-term growth rate is 12.7%. The Zacks Consensus Estimate for the current year has improved 0.7% over the last 60 days. The stock is currently trading at a 7.3% discount to its 52-week high price of $324.57 recorded on Aug 11. &nbsp;</p>\n<h3 style="text-align:justify;">More Stock News: This Is Bigger than the iPhone!</h3>\n<p style="text-align:justify;">It could become the mother of all technological revolutions. Apple sold a mere 1 billion iPhones in 10 years but a new breakthrough is expected to generate more than 27 billion devices in just 3 years, creating a $1.7 trillion market.</p>\n<p style="text-align:justify;">Zacks has just released a Special Report that spotlights this fast-emerging phenomenon and 6 tickers for taking advantage of it. If you don\'t buy now, you may kick yourself in 2021.</p>\n<p style="text-align:justify;">Click here for the 6 trades &gt;&gt;</p>\n<p style="text-align:justify;">Media Contact</p>\n<p style="text-align:justify;">Zacks Investment Research</p>\n<p style="text-align:justify;">800-767-3771 ext. 9339</p>\n<p style="text-align:justify;">support@zacks.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\n<p style="text-align:justify;">https://www.zacks.com&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>\n<p style="text-align:justify;">&nbsp;</p>\n<p style="text-align:justify;">Past performance is no guarantee of future results. Inherent in any investment is the potential for loss<strong>. </strong>This material is being provided for informational purposes only and nothing herein constitutes investment, legal, accounting or tax advice, or a recommendation to buy, sell or hold a security. No recommendation or advice is being given as to whether any investment is suitable for a particular investor. It should not be assumed&nbsp;that any investments in securities, companies, sectors or markets identified and described were or will be profitable. All information is current as of the date of herein and&nbsp;is subject to change without notice. Any views or opinions expressed may not reflect those of the firm as a whole. Zacks Investment Research does not engage in investment banking, market making or asset management activities of any securities. These returns are from hypothetical portfolios consisting of stocks with Zacks Rank = 1 that were rebalanced monthly with zero transaction costs. These are not the returns of actual portfolios of stocks. The S&amp;P 500 is an unmanaged index. Visit https://www.zacks.com/performance for information about the performance numbers displayed in this press release.</p>\n<br>Want the latest recommendations from Zacks Investment Research? Today, you can download 7 Best Stocks for the Next 30 Days. \n<a href="https://www.zacks.com/registration/pfp/?ALERT=RPT_7BST_LP194&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_PRESS_RELEASES&amp;cid=CS-YAHOO-FT-press_releases-1068326" target="_blank">Click to get this free report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&amp;d_alert=ZER_CONF&amp;t=UNH&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_PRESS_RELEASES&amp;cid=CS-YAHOO-FT-press_releases-1068326">UnitedHealth Group Incorporated (UNH) : Free Stock Analysis Report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&amp;d_alert=ZER_CONF&amp;t=AAPL&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_PRESS_RELEASES&amp;cid=CS-YAHOO-FT-press_releases-1068326">Apple Inc. (AAPL) : Free Stock Analysis Report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&amp;d_alert=ZER_CONF&amp;t=WMT&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_PRESS_RELEASES&amp;cid=CS-YAHOO-FT-press_releases-1068326">Walmart Inc. (WMT) : Free Stock Analysis Report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&amp;d_alert=ZER_CONF&amp;t=CRM&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_PRESS_RELEASES&amp;cid=CS-YAHOO-FT-press_releases-1068326">salesforce.com, inc. (CRM) : Free Stock Analysis Report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/registration/pfp?ALERT=YAHOO_ZER&amp;d_alert=ZER_CONF&amp;t=DOW&amp;ADID=YAHOO_CONTENT_ZER_ARTCAT_PRESS_RELEASES&amp;cid=CS-YAHOO-FT-press_releases-1068326">Dow Inc. (DOW) : Free Stock Analysis Report</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/stock/news/1068326/the-zacks-analyst-blog-highlights-dow-salesforce-apple-walmart-and-unitedhealth?cid=CS-YAHOO-FT-press_releases-1068326">To read this article on Zacks.com click here.</a>\n<br>&nbsp;\n<br>\n<a href="https://www.zacks.com/">Zacks Investment Research</a>',
        streams: [],
        ignore_main_image: false,
        published_at: 1601375110,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 635,
              height: 400,
              url:
                'https://s.yimg.com/uu/api/res/1.2/YvUQqGaT4H9Cezz537bCcg--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/b0jiAs9aSFsUqpG_d_fJ5w--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/b452082c5bafce0b3d09c2a06d33f987',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ckh2vJEdYLs_IBsfxiF3Ww--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/b0jiAs9aSFsUqpG_d_fJ5w--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/b452082c5bafce0b3d09c2a06d33f987',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 202,
              url:
                'https://s.yimg.com/uu/api/res/1.2/pEM6lYckHT2WW4KmESBI_g--~B/Zmk9ZmlsbDtoPTIwMjt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/b0jiAs9aSFsUqpG_d_fJ5w--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/b452082c5bafce0b3d09c2a06d33f987',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/2z.qS.LYfL0yyXiJCxNFog--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/b0jiAs9aSFsUqpG_d_fJ5w--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/b452082c5bafce0b3d09c2a06d33f987',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/2z.qS.LYfL0yyXiJCxNFog--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/b0jiAs9aSFsUqpG_d_fJ5w--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/b452082c5bafce0b3d09c2a06d33f987',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 101,
              url:
                'https://s.yimg.com/uu/api/res/1.2/_QeykEXGFkz4hM4pan1RAg--~B/Zmk9ZmlsbDtoPTEwMTt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/b0jiAs9aSFsUqpG_d_fJ5w--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/b452082c5bafce0b3d09c2a06d33f987',
              tags: null,
            },
          ],
          original_height: 400,
          original_width: 635,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/YvUQqGaT4H9Cezz537bCcg--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/b0jiAs9aSFsUqpG_d_fJ5w--~B/aD00MDA7dz02MzU7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-us/zacks.com/b452082c5bafce0b3d09c2a06d33f987',
        },
        is_magazine: false,
        reference_id: '4749e245-d0ff-3599-9ca0-74842150d63d',
      },
      {
        uuid: '91a4118c-f322-34f1-8a06-e08b4fad52a8',
        title: 'Judge Recommends Jury Trial in Epic vs. Apple Fight',
        link:
          'https://finance.yahoo.com/video/judge-recommends-jury-trial-epic-214546152.html',
        summary:
          'Sep.28 -- The federal judge overseeing Epic Games Inc.’s antitrust lawsuit against Apple Inc. said a jury trial might be a better option to resolve the case. Laura Martin, analyst at Needham & Co., discusses the case on "Bloomberg Technology."',
        publisher: 'Bloomberg',
        author: '',
        type: 'cavideo',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: false,
        content: null,
        streams: [
          {
            url:
              'https://video.media.yql.yahoo.com/v1/hls/91a4118c-f322-34f1-8a06-e08b4fad52a8.m3u8?region=US&site=finance',
            uuid: '91a4118c-f322-34f1-8a06-e08b4fad52a8',
            mime_type: 'application/vnd.apple.mpegURL',
          },
        ],
        ignore_main_image: false,
        published_at: 1601329546,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 1280,
              height: 720,
              url:
                'https://s.yimg.com/uu/api/res/1.2/jXXOEH1pSmFGCdjP9MUsTw--~B/aD03MjA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/hd/cp-video-transcode/prod/2020-09/28/5f7264dc13c1af6bd99947f7/5f7264dc13c1af6bd99947f8_o_U_v3.jpg',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/q8L5shRRHWzLK5getlaF8g--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/hd/cp-video-transcode/prod/2020-09/28/5f7264dc13c1af6bd99947f7/5f7264dc13c1af6bd99947f8_o_U_v3.jpg',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/LBXXxsYyc7XUbRO8ZHJf.A--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/hd/cp-video-transcode/prod/2020-09/28/5f7264dc13c1af6bd99947f7/5f7264dc13c1af6bd99947f8_o_U_v3.jpg',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/9nBWCEulCTIX458eAOgAMw--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/hd/cp-video-transcode/prod/2020-09/28/5f7264dc13c1af6bd99947f7/5f7264dc13c1af6bd99947f8_o_U_v3.jpg',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/R2BVF0C9v2nS_pZk7RQDjA--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/hd/cp-video-transcode/prod/2020-09/28/5f7264dc13c1af6bd99947f7/5f7264dc13c1af6bd99947f8_o_U_v3.jpg',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/R2BVF0C9v2nS_pZk7RQDjA--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/hd/cp-video-transcode/prod/2020-09/28/5f7264dc13c1af6bd99947f7/5f7264dc13c1af6bd99947f8_o_U_v3.jpg',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/PswTKiCS0zW4OFL1ACix4g--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/hd/cp-video-transcode/prod/2020-09/28/5f7264dc13c1af6bd99947f7/5f7264dc13c1af6bd99947f8_o_U_v3.jpg',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 432,
              url:
                'https://s.yimg.com/uu/api/res/1.2/aS.vpUW9mTGtyealcyWpiw--~B/Zmk9ZmlsbDtoPTQzMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/hd/cp-video-transcode/prod/2020-09/28/5f7264dc13c1af6bd99947f7/5f7264dc13c1af6bd99947f8_o_U_v3.jpg',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Z8FnuvgcLMbyebjFzxh4OA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/hd/cp-video-transcode/prod/2020-09/28/5f7264dc13c1af6bd99947f7/5f7264dc13c1af6bd99947f8_o_U_v3.jpg',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/Z8FnuvgcLMbyebjFzxh4OA--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/hd/cp-video-transcode/prod/2020-09/28/5f7264dc13c1af6bd99947f7/5f7264dc13c1af6bd99947f8_o_U_v3.jpg',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/eG51WHSBKPokbE1bDQsVow--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/hd/cp-video-transcode/prod/2020-09/28/5f7264dc13c1af6bd99947f7/5f7264dc13c1af6bd99947f8_o_U_v3.jpg',
              tags: null,
            },
          ],
          original_height: 720,
          original_width: 1280,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/jXXOEH1pSmFGCdjP9MUsTw--~B/aD03MjA7dz0xMjgwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/hd/cp-video-transcode/prod/2020-09/28/5f7264dc13c1af6bd99947f7/5f7264dc13c1af6bd99947f8_o_U_v3.jpg',
        },
        is_magazine: false,
        reference_id: '91a4118c-f322-34f1-8a06-e08b4fad52a8',
      },
      {
        uuid: '8839855f-4ac1-3194-9ad5-5e9bb4caece4',
        title: 'Epic Game’s Apple App Store lawsuit will test antitrust lawsuits',
        link: 'https://finance.yahoo.com/video/epic-game-apple-app-store-204534328.html',
        summary:
          '‘Fortnite’ maker Epic Games is suing both Apple and Google’s app stores, claiming the tech giants are taking advantage of the gaming market and breaking antitrust laws. Yahoo FInance’s Dan Howley joins The Final Round to break down the details.',
        publisher: 'Yahoo Finance Video',
        author: '',
        type: 'cavideo',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: false,
        content: null,
        streams: [
          {
            url:
              'https://video.media.yql.yahoo.com/v1/hls/8839855f-4ac1-3194-9ad5-5e9bb4caece4.m3u8?region=US&site=finance',
            uuid: '8839855f-4ac1-3194-9ad5-5e9bb4caece4',
            mime_type: 'application/vnd.apple.mpegURL',
          },
        ],
        ignore_main_image: false,
        published_at: 1601325934,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 4458,
              height: 2506,
              url:
                'https://s.yimg.com/uu/api/res/1.2/vY6tJY_r_K5IQ579KfedzA--~B/aD0yNTA2O3c9NDQ1ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/zBq4tWK8FPRZ3b3ssxgQKQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait_retina',
              width: 1536,
              height: 863,
              url:
                'https://s.yimg.com/uu/api/res/1.2/FYSXPkIY5cyuvSNnPwcF_A--~B/Zmk9ZmlsbDtoPTg2Mzt3PTE1MzY7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 180,
              url:
                'https://s.yimg.com/uu/api/res/1.2/HwX93lUObCt4C6yarWsA.A--~B/Zmk9ZmlsbDtoPTE4MDt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/ILIZXHj9.LlJ4xfBnHPhLA--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/DvaDRY5dZ9yVck2lIY1AcQ--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 360,
              url:
                'https://s.yimg.com/uu/api/res/1.2/DvaDRY5dZ9yVck2lIY1AcQ--~B/Zmk9ZmlsbDtoPTM2MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/hwGQQjYz7r8ZATXgo4kqtQ--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 432,
              url:
                'https://s.yimg.com/uu/api/res/1.2/H6i6vStfzHRS8RXuNJTJ9Q--~B/Zmk9ZmlsbDtoPTQzMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/nkjezp6ykr.jgYMptpR8sw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/nkjezp6ykr.jgYMptpR8sw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 90,
              url:
                'https://s.yimg.com/uu/api/res/1.2/24T92i5KFEe5ebtG1g_QwA--~B/Zmk9ZmlsbDtoPTkwO3c9MTYwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
              tags: null,
            },
          ],
          original_height: 2506,
          original_width: 4458,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/vY6tJY_r_K5IQ579KfedzA--~B/aD0yNTA2O3c9NDQ1ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/os/creatr-uploaded-images/2020-09/b0aef650-01ca-11eb-af7f-fe86da9862a2',
        },
        is_magazine: false,
        reference_id: '8839855f-4ac1-3194-9ad5-5e9bb4caece4',
      },
      {
        uuid: 'f1655213-7fb9-3263-ab9a-8bcae5861f6d',
        title: 'U.S. judge urges Apple, Epic Games to put antitrust claims before jury',
        link: 'https://finance.yahoo.com/news/u-judge-urges-apple-epic-191147469.html',
        summary:
          "“I know I'm just a stepping stone for all of you,” District Judge Yvonne Gonzalez Rogers said during a virtual hearing from Oakland, California. Epic Games sued Apple in August, alleging the iPhone maker's 30% commission on purchases made through Apple's App Store was anticompetitive.",
        publisher: 'Reuters',
        author: '',
        type: 'story',
        entities: [
          {
            term: 'TICKER:AAPL',
            label: 'Apple Inc.',
            score: 1,
          },
        ],
        offnet: false,
        content:
          "<p>(Reuters) - A federal judge in California on Monday urged Apple Inc and \"Fortnite\" creator Epic Games to take their antitrust dispute before a jury, saying the higher courts would be less likely to overturn the result.</p>\n<p>“I know I'm just a stepping stone for all of you,” District Judge Yvonne Gonzalez Rogers said during a virtual hearing from Oakland, California.</p>\n<p>Epic Games sued Apple in August, alleging the iPhone maker's 30% commission on purchases made through Apple's App Store was anticompetitive. The judge's comments came during a hearing to decide whether to keep in place an emergency order saying Apple could remove \"Fortnite\" from the App Store but could not harm Epic's developer tool business.</p>\n<p></p>\n<p>(Reporting by Stephen Nellis in San Francisco; editing by Jonathan Oatis)</p>",
        streams: [
          {
            url:
              'https://video.media.yql.yahoo.com/v1/hls/8839855f-4ac1-3194-9ad5-5e9bb4caece4.m3u8?region=US&site=finance',
            uuid: '8839855f-4ac1-3194-9ad5-5e9bb4caece4',
            mime_type: 'application/vnd.apple.mpegURL',
          },
        ],
        ignore_main_image: false,
        published_at: 1601320307,
        main_image: {
          resolutions: [
            {
              tag: 'original',
              width: 800,
              height: 533,
              url:
                'https://s.yimg.com/uu/api/res/1.2/8tlrQrq8dBf27OMUXEL_nw--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/tvEA7XmSfRXWZDxYBo2NAg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters-finance.com/be4ef16191beaf6f665ce3291929b265',
              tags: null,
            },
            {
              tag: 'ios:size=card_small_fixed',
              width: 320,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/qlx1IkRxG_h_oc2KNznoZg--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9MzIwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/tvEA7XmSfRXWZDxYBo2NAg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters-finance.com/be4ef16191beaf6f665ce3291929b265',
              tags: null,
            },
            {
              tag: 'ios:size=medium',
              width: 320,
              height: 213,
              url:
                'https://s.yimg.com/uu/api/res/1.2/0iYQaKz4BALTzgcgxDqvrQ--~B/Zmk9ZmlsbDtoPTIxMzt3PTMyMDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/tvEA7XmSfRXWZDxYBo2NAg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters-finance.com/be4ef16191beaf6f665ce3291929b265',
              tags: null,
            },
            {
              tag: 'ios:size=card_large_fixed',
              width: 640,
              height: 1060,
              url:
                'https://s.yimg.com/uu/api/res/1.2/7PipWXkTCTsW5R.tCkDcfw--~B/Zmk9ZmlsbDtoPTEwNjA7cHlvZmY9MDt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/tvEA7XmSfRXWZDxYBo2NAg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters-finance.com/be4ef16191beaf6f665ce3291929b265',
              tags: null,
            },
            {
              tag: 'ios:size=extra_large',
              width: 640,
              height: 426,
              url:
                'https://s.yimg.com/uu/api/res/1.2/MENYbI4OoB5A7KJz28fGCw--~B/Zmk9ZmlsbDtoPTQyNjt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/tvEA7XmSfRXWZDxYBo2NAg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters-finance.com/be4ef16191beaf6f665ce3291929b265',
              tags: null,
            },
            {
              tag: 'fit-width-640',
              width: 640,
              height: 426,
              url:
                'https://s.yimg.com/uu/api/res/1.2/MENYbI4OoB5A7KJz28fGCw--~B/Zmk9ZmlsbDtoPTQyNjt3PTY0MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/tvEA7XmSfRXWZDxYBo2NAg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters-finance.com/be4ef16191beaf6f665ce3291929b265',
              tags: null,
            },
            {
              tag: 'ios:size=large_new_fixed',
              width: 640,
              height: 530,
              url:
                'https://s.yimg.com/uu/api/res/1.2/L8XVpkkH2iXTX8SSQec30Q--~B/Zmk9ZmlsbDtoPTUzMDtweW9mZj0wO3c9NjQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/tvEA7XmSfRXWZDxYBo2NAg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters-finance.com/be4ef16191beaf6f665ce3291929b265',
              tags: null,
            },
            {
              tag: 'ios:size=ipad_portrait',
              width: 768,
              height: 512,
              url:
                'https://s.yimg.com/uu/api/res/1.2/O.3L.UFWF7aThKQAXVgG5Q--~B/Zmk9ZmlsbDtoPTUxMjt3PTc2ODthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/tvEA7XmSfRXWZDxYBo2NAg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters-finance.com/be4ef16191beaf6f665ce3291929b265',
              tags: null,
            },
            {
              tag: 'ios:size=square_large',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/bab2hkc61pYZ3uimzu8bxw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/tvEA7XmSfRXWZDxYBo2NAg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters-finance.com/be4ef16191beaf6f665ce3291929b265',
              tags: null,
            },
            {
              tag: 'square-140x140',
              width: 140,
              height: 140,
              url:
                'https://s.yimg.com/uu/api/res/1.2/bab2hkc61pYZ3uimzu8bxw--~B/Zmk9ZmlsbDtoPTE0MDtweW9mZj0wO3c9MTQwO2FwcGlkPXl0YWNoeW9u/https://s.yimg.com/uu/api/res/1.2/tvEA7XmSfRXWZDxYBo2NAg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters-finance.com/be4ef16191beaf6f665ce3291929b265',
              tags: null,
            },
            {
              tag: 'ios:size=small',
              width: 160,
              height: 107,
              url:
                'https://s.yimg.com/uu/api/res/1.2/LhUBig75LMeuLa1la2ElhA--~B/Zmk9ZmlsbDtoPTEwNzt3PTE2MDthcHBpZD15dGFjaHlvbg--/https://s.yimg.com/uu/api/res/1.2/tvEA7XmSfRXWZDxYBo2NAg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters-finance.com/be4ef16191beaf6f665ce3291929b265',
              tags: null,
            },
          ],
          original_height: 533,
          original_width: 800,
          original_url:
            'https://s.yimg.com/uu/api/res/1.2/8tlrQrq8dBf27OMUXEL_nw--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://s.yimg.com/uu/api/res/1.2/tvEA7XmSfRXWZDxYBo2NAg--~B/aD01MzM7dz04MDA7YXBwaWQ9eXRhY2h5b24-/https://media.zenfs.com/en-US/reuters-finance.com/be4ef16191beaf6f665ce3291929b265',
        },
        is_magazine: false,
        reference_id: 'f1655213-7fb9-3263-ab9a-8bcae5861f6d',
      },
    ]
    return { chart, news, summary }
  }
}
