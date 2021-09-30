window.BENCHMARK_DATA = {
  "lastUpdate": 1632986375821,
  "repoUrl": "https://github.com/ernestas-poskus/hyper",
  "entries": {
    "pipeline": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/ernestas-poskus/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607683273718,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 49228,
            "range": "± 5664",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f821ecdd197b42253b4930f1d67ae98b5c2028ea",
          "message": "docs(body): set doc_cfg attribute for `Body::wrap_stream` (#2403)",
          "timestamp": "2021-01-15T16:24:03-08:00",
          "tree_id": "aa6c2c95e46ee99caa91cd386d804b688c0a49b0",
          "url": "https://github.com/ernestas-poskus/hyper/commit/f821ecdd197b42253b4930f1d67ae98b5c2028ea"
        },
        "date": 1610972454142,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 46430,
            "range": "± 2393",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@arnavion.dev",
            "name": "Arnavion",
            "username": "Arnavion"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "42587059e6175735b1a8656c5ddbff0edb19294c",
          "message": "docs(server): use cfg_feature! on hyper::server::conn::tcp instead of #[cfg]\n\nThis is required to surface the required feature (`tcp`) in the generated docs\nfor `hyper::server::conn::{AddrIncoming, AddrStream}`. Before this change,\ntheir docs only mentioned the features needed for the `hyper::server::conn` mod\nitself.\n\nFixes #2425",
          "timestamp": "2021-02-09T13:31:41-08:00",
          "tree_id": "f50609d1ee3a1c9696d0e6954a6ec2e68494cfba",
          "url": "https://github.com/ernestas-poskus/hyper/commit/42587059e6175735b1a8656c5ddbff0edb19294c"
        },
        "date": 1613382831866,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 43215,
            "range": "± 8195",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "165ada34a3525876890c644a61efd4b17cb4adc0",
          "message": "docs(ffi): note that hyper_buf_copy can return NULL on error",
          "timestamp": "2021-08-26T16:48:03-07:00",
          "tree_id": "006cc7a6649af411f4c546d45bd0df6190e41355",
          "url": "https://github.com/ernestas-poskus/hyper/commit/165ada34a3525876890c644a61efd4b17cb4adc0"
        },
        "date": 1630082119128,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 38972,
            "range": "± 30325",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ddao@ualberta.ca",
            "name": "Dai Dao",
            "username": "dai-dao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3908eeb788333f7dae8bb8878714ccc84ab9df0e",
          "message": "docs(examples): updated imports in client_json example (#2412)",
          "timestamp": "2021-09-16T16:34:10-07:00",
          "tree_id": "57e7b4a06313e9f2a07a3719123f6dcf29bdf5ec",
          "url": "https://github.com/ernestas-poskus/hyper/commit/3908eeb788333f7dae8bb8878714ccc84ab9df0e"
        },
        "date": 1632065667452,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 69728,
            "range": "± 13202",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "ecd5dc1034a21413b327eb14f3447ede9b3be4c8",
          "message": "docs(contrib): add Minimum Support Rust Version (MSRV) policy",
          "timestamp": "2021-09-21T16:02:04-07:00",
          "tree_id": "024f9012f31ff8d113d8960240679fd0f2bdefb6",
          "url": "https://github.com/ernestas-poskus/hyper/commit/ecd5dc1034a21413b327eb14f3447ede9b3be4c8"
        },
        "date": 1632986370577,
        "tool": "cargo",
        "benches": [
          {
            "name": "hello_world_16",
            "value": 70930,
            "range": "± 20616",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "connect": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/ernestas-poskus/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607683279821,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 46735,
            "range": "± 2276",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f821ecdd197b42253b4930f1d67ae98b5c2028ea",
          "message": "docs(body): set doc_cfg attribute for `Body::wrap_stream` (#2403)",
          "timestamp": "2021-01-15T16:24:03-08:00",
          "tree_id": "aa6c2c95e46ee99caa91cd386d804b688c0a49b0",
          "url": "https://github.com/ernestas-poskus/hyper/commit/f821ecdd197b42253b4930f1d67ae98b5c2028ea"
        },
        "date": 1610972455716,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 45677,
            "range": "± 9262",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@arnavion.dev",
            "name": "Arnavion",
            "username": "Arnavion"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "42587059e6175735b1a8656c5ddbff0edb19294c",
          "message": "docs(server): use cfg_feature! on hyper::server::conn::tcp instead of #[cfg]\n\nThis is required to surface the required feature (`tcp`) in the generated docs\nfor `hyper::server::conn::{AddrIncoming, AddrStream}`. Before this change,\ntheir docs only mentioned the features needed for the `hyper::server::conn` mod\nitself.\n\nFixes #2425",
          "timestamp": "2021-02-09T13:31:41-08:00",
          "tree_id": "f50609d1ee3a1c9696d0e6954a6ec2e68494cfba",
          "url": "https://github.com/ernestas-poskus/hyper/commit/42587059e6175735b1a8656c5ddbff0edb19294c"
        },
        "date": 1613382865675,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 62659,
            "range": "± 11294",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "165ada34a3525876890c644a61efd4b17cb4adc0",
          "message": "docs(ffi): note that hyper_buf_copy can return NULL on error",
          "timestamp": "2021-08-26T16:48:03-07:00",
          "tree_id": "006cc7a6649af411f4c546d45bd0df6190e41355",
          "url": "https://github.com/ernestas-poskus/hyper/commit/165ada34a3525876890c644a61efd4b17cb4adc0"
        },
        "date": 1630082107889,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 75875,
            "range": "± 3606",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ddao@ualberta.ca",
            "name": "Dai Dao",
            "username": "dai-dao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3908eeb788333f7dae8bb8878714ccc84ab9df0e",
          "message": "docs(examples): updated imports in client_json example (#2412)",
          "timestamp": "2021-09-16T16:34:10-07:00",
          "tree_id": "57e7b4a06313e9f2a07a3719123f6dcf29bdf5ec",
          "url": "https://github.com/ernestas-poskus/hyper/commit/3908eeb788333f7dae8bb8878714ccc84ab9df0e"
        },
        "date": 1632065496937,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 45671,
            "range": "± 2187",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "ecd5dc1034a21413b327eb14f3447ede9b3be4c8",
          "message": "docs(contrib): add Minimum Support Rust Version (MSRV) policy",
          "timestamp": "2021-09-21T16:02:04-07:00",
          "tree_id": "024f9012f31ff8d113d8960240679fd0f2bdefb6",
          "url": "https://github.com/ernestas-poskus/hyper/commit/ecd5dc1034a21413b327eb14f3447ede9b3be4c8"
        },
        "date": 1632986372395,
        "tool": "cargo",
        "benches": [
          {
            "name": "http_connector",
            "value": 74538,
            "range": "± 8896",
            "unit": "ns/iter"
          }
        ]
      }
    ],
    "end_to_end": [
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "b4e24332a0cd44068a806081d51686f50c086056",
          "message": "feat(client): change DNS Resolver to resolve to SocketAddrs (#2346)\n\nThe DNS resolver part of `HttpConnector` used to require resolving to\r\n`IpAddr`s, and this changes it so that they resolve to `SocketAddr`s.\r\nThe main benefit here is allowing for resolvers to set the IPv6 zone ID\r\nwhen resolving, but it also just more closely matches\r\n`std::net::ToSocketAddrs`.\r\n\r\nCloses #1937\r\n\r\nBREAKING CHANGE: Custom resolvers used with `HttpConnector` must change\r\n  to resolving to an iterator of `SocketAddr`s instead of `IpAddr`s.",
          "timestamp": "2020-12-03T14:21:19-08:00",
          "tree_id": "f15bc5873b96ec18a2c130878bec5136d305e561",
          "url": "https://github.com/ernestas-poskus/hyper/commit/b4e24332a0cd44068a806081d51686f50c086056"
        },
        "date": 1607683455735,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 73109,
            "range": "± 2580",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6993454,
            "range": "± 427363",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 30966,
            "range": "± 1109",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 216811,
            "range": "± 6612",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52818469,
            "range": "± 2328439",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49971612,
            "range": "± 7254495",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 52560461,
            "range": "± 1983836",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3805725,
            "range": "± 617004",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 35338,
            "range": "± 1637",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 53116,
            "range": "± 8242",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 172859,
            "range": "± 27764",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8844206,
            "range": "± 10096458",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9073614,
            "range": "± 9463338",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8605050,
            "range": "± 10016515",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 59635657,
            "range": "± 6855428",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 73592873,
            "range": "± 14924441",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6077434,
            "range": "± 828079",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 58747,
            "range": "± 3323",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 115804,
            "range": "± 13367",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "constantin.nickel@gmail.com",
            "name": "nickelc",
            "username": "nickelc"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "f821ecdd197b42253b4930f1d67ae98b5c2028ea",
          "message": "docs(body): set doc_cfg attribute for `Body::wrap_stream` (#2403)",
          "timestamp": "2021-01-15T16:24:03-08:00",
          "tree_id": "aa6c2c95e46ee99caa91cd386d804b688c0a49b0",
          "url": "https://github.com/ernestas-poskus/hyper/commit/f821ecdd197b42253b4930f1d67ae98b5c2028ea"
        },
        "date": 1610972637146,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 78789,
            "range": "± 22233",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 7095211,
            "range": "± 448666",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 33145,
            "range": "± 769",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 232772,
            "range": "± 15081",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 52796898,
            "range": "± 1578193",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 52790635,
            "range": "± 1662086",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 54603009,
            "range": "± 1255792",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 4004100,
            "range": "± 516427",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 36957,
            "range": "± 3513",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 52806,
            "range": "± 2813",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 170415,
            "range": "± 12215",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8567734,
            "range": "± 9374025",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9645797,
            "range": "± 9781160",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9002653,
            "range": "± 10258002",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 56334633,
            "range": "± 8034908",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 74874842,
            "range": "± 15712438",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 6066976,
            "range": "± 1022819",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 59306,
            "range": "± 3609",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 115885,
            "range": "± 11239",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "me@arnavion.dev",
            "name": "Arnavion",
            "username": "Arnavion"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "42587059e6175735b1a8656c5ddbff0edb19294c",
          "message": "docs(server): use cfg_feature! on hyper::server::conn::tcp instead of #[cfg]\n\nThis is required to surface the required feature (`tcp`) in the generated docs\nfor `hyper::server::conn::{AddrIncoming, AddrStream}`. Before this change,\ntheir docs only mentioned the features needed for the `hyper::server::conn` mod\nitself.\n\nFixes #2425",
          "timestamp": "2021-02-09T13:31:41-08:00",
          "tree_id": "f50609d1ee3a1c9696d0e6954a6ec2e68494cfba",
          "url": "https://github.com/ernestas-poskus/hyper/commit/42587059e6175735b1a8656c5ddbff0edb19294c"
        },
        "date": 1613383027877,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 115341,
            "range": "± 14666",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 5791771,
            "range": "± 612651",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 44044,
            "range": "± 4772",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 278464,
            "range": "± 34212",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 53588613,
            "range": "± 4031032",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 49507675,
            "range": "± 5854093",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 53408348,
            "range": "± 3529518",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3114458,
            "range": "± 1091952",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 52726,
            "range": "± 5134",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 75496,
            "range": "± 5780",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 197455,
            "range": "± 14461",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 10311954,
            "range": "± 9109353",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 10768156,
            "range": "± 9070580",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 9974737,
            "range": "± 9031494",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 56925401,
            "range": "± 4661409",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 69353402,
            "range": "± 14078243",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5943321,
            "range": "± 896173",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 91097,
            "range": "± 10586",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 161662,
            "range": "± 19284",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "committer": {
            "email": "sean@seanmonstar.com",
            "name": "Sean McArthur",
            "username": "seanmonstar"
          },
          "distinct": true,
          "id": "165ada34a3525876890c644a61efd4b17cb4adc0",
          "message": "docs(ffi): note that hyper_buf_copy can return NULL on error",
          "timestamp": "2021-08-26T16:48:03-07:00",
          "tree_id": "006cc7a6649af411f4c546d45bd0df6190e41355",
          "url": "https://github.com/ernestas-poskus/hyper/commit/165ada34a3525876890c644a61efd4b17cb4adc0"
        },
        "date": 1630082217140,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 70080,
            "range": "± 1061",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 5805967,
            "range": "± 326916",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29822,
            "range": "± 784",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 214993,
            "range": "± 6185",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51254765,
            "range": "± 1617280",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 47085513,
            "range": "± 2017688",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 50531266,
            "range": "± 1253742",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3203312,
            "range": "± 275238",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33616,
            "range": "± 630",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 50947,
            "range": "± 1088",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 157515,
            "range": "± 1854",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8914501,
            "range": "± 8842559",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9823357,
            "range": "± 61163",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8716593,
            "range": "± 8612667",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 55077547,
            "range": "± 3156694",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 67457793,
            "range": "± 12255913",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5760664,
            "range": "± 573396",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 58191,
            "range": "± 1341",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 114434,
            "range": "± 1953",
            "unit": "ns/iter"
          }
        ]
      },
      {
        "commit": {
          "author": {
            "email": "ddao@ualberta.ca",
            "name": "Dai Dao",
            "username": "dai-dao"
          },
          "committer": {
            "email": "noreply@github.com",
            "name": "GitHub",
            "username": "web-flow"
          },
          "distinct": true,
          "id": "3908eeb788333f7dae8bb8878714ccc84ab9df0e",
          "message": "docs(examples): updated imports in client_json example (#2412)",
          "timestamp": "2021-09-16T16:34:10-07:00",
          "tree_id": "57e7b4a06313e9f2a07a3719123f6dcf29bdf5ec",
          "url": "https://github.com/ernestas-poskus/hyper/commit/3908eeb788333f7dae8bb8878714ccc84ab9df0e"
        },
        "date": 1632065634565,
        "tool": "cargo",
        "benches": [
          {
            "name": "http1_body_both_100kb",
            "value": 70305,
            "range": "± 961",
            "unit": "ns/iter"
          },
          {
            "name": "http1_body_both_10mb",
            "value": 6001970,
            "range": "± 224357",
            "unit": "ns/iter"
          },
          {
            "name": "http1_get",
            "value": 29196,
            "range": "± 524",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_empty",
            "value": 213777,
            "range": "± 5603",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10kb_100_chunks",
            "value": 51156942,
            "range": "± 1626256",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_req_10mb",
            "value": 45264653,
            "range": "± 1443330",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_10mb",
            "value": 48819462,
            "range": "± 1149766",
            "unit": "ns/iter"
          },
          {
            "name": "http1_parallel_x10_res_1mb",
            "value": 3264163,
            "range": "± 283043",
            "unit": "ns/iter"
          },
          {
            "name": "http1_post",
            "value": 33161,
            "range": "± 923",
            "unit": "ns/iter"
          },
          {
            "name": "http2_get",
            "value": 50696,
            "range": "± 869",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_empty",
            "value": 157288,
            "range": "± 984",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks",
            "value": 8937484,
            "range": "± 8839131",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_adaptive_window",
            "value": 9065205,
            "range": "± 8703629",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10kb_100_chunks_max_window",
            "value": 8734272,
            "range": "± 8578512",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_req_10mb",
            "value": 55279316,
            "range": "± 3144492",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_10mb",
            "value": 66509670,
            "range": "± 12321738",
            "unit": "ns/iter"
          },
          {
            "name": "http2_parallel_x10_res_1mb",
            "value": 5792707,
            "range": "± 686753",
            "unit": "ns/iter"
          },
          {
            "name": "http2_post",
            "value": 58237,
            "range": "± 801",
            "unit": "ns/iter"
          },
          {
            "name": "http2_req_100kb",
            "value": 116430,
            "range": "± 1938",
            "unit": "ns/iter"
          }
        ]
      }
    ]
  }
}