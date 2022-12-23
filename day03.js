const puzzleInput = ["LHLRlCCvCLVgHPfCHtVjBGrBDNzWFBsBGBfscGsD", "nQwbnwwpbrJBrNWB", "hmnSdSdQpTpdnlPdvddPNglLjH", "RZhwpDsNqVmQClwl", "TLJfLTPqcvTrvvLMLMlVzzvVVQQtmQCmtzmV", "MJjccdfTMcbqjNSRSZsSDZ", "LLrNNqCTCwLTttwcNctqFGmRBSBjzjbSzbBbjNbzjB", "GnhhZQPDGdldgQmQSjpzjzQssb", "gDJZPMnPnhlhJWhZntLCLcTqVMLrGVtMfM", "rrBgDBGnVnffDnfQQqngJhhSRQvhhCRRRSZbRpRzwQ", "NtLmcHPHMHHssFJphZpbhwpNRbbC", "LJPHlmdJDgrrqrnl", "nJhrcNnfrFwNhPdMQSgZSCMjQn", "LjqGWsGWllRRlHVsqGGWsZZSSHQgPmHZZSPvdPCmvQ", "zqqVTWjqBsTJprNbppFb", "zSMgWzlgFSWFcGZlCZGlrrTc", "spnQHdQmHddNmpWrpWcChccTWc", "BsRsnmBQdNWsvRPzbzbLzDVSPSbVLM", "lDfbffptlrJZTBJHjjBWjT", "LcwwgQLgzvztwtMQGCMVCHWmnmjWnGhFHnZjmZhjhT", "sCqtzsswCgccbSqrDSqbNNfN", "snnnjwRRwGSSnVmhhVMhGFbgQgbzFFPPgQQmPbbgQd", "qCrccvcDDcvqDZlCcrcfQNQFdsbgWzFfQddQQPgQ", "ZcrvrBqBTCZnBBswjwpSRs", "qSczBfBcjMZMfctsmsGmFJsmQQcQCr", "wPhTLNVNGLNdGHPHwlQsnrnmnrQvHFFHQn", "dLdwbNLRdgGbgTjZfDbqDWjftSzW", "rZwlrtRtNtlHqVBtdqQgdq", "fbwzpPwbhJzpwfTSHgdgqcJVcBjHvHdJ", "LLPbhzPpTTbTshfGhPwSFWnNmMrrZZmNmZDmWNCCZs", "tMHgMWMQWgFJTHsWMvJrVdlmvlSvdvlpvG", "RNfZZfRttBtdlZlmmmplSS", "DzzNDDRwnwwbLnMFtsMntQFM", "qHqBMNqgMwHMbnGStHSbndnt", "PwWZPjpfsDsDsPfPfjdbSvbWhdFSbFGSWFtr", "wfpjpJcfVsspzZRRszDpwcRggLTQQBLqNqcqcggLCgNmlq", "TmmFjtvFdDGjdFFJjFRDLNLHGBVcqgLcLgVBLqgV", "WbWSPSwQCWrWQSrCbwNVlLlBZLBvLlvZVqPl", "SfwbhrwQQbbMwCwWCrbwJRvptJfjDTDRvzTttRjp", "jzqSMszqsbVVMVMgWhWCgMrpGgpB", "wrwLcFQmPlFFlwLZmFGTfPvWGfPvhWWWvGgf", "wRZtHFHmzNDHSqrs", "NprlCgrrnrNCjplSCtljpFrFZLzzgwmVgBzBZZPwzBPQBwVL", "HsDMvHTDfsfQZfZzmPWL", "JcPsDGTqcTqSdrSCtnCt", "cFcmfmJFtFmtlTNtLlCWTT", "QPQzjRRsVsQqBqwlTlNBpLNSWDpN", "QblgzRPgbgQsVvgPVQhgQqjvMnJfccnZddcGGfrFJMFGGF", "PWbWmFFnPFPWbDVVmmDHDFGdGhTQdLdnTZQZZcGSGGdQ", "ClzjNBlBJvlsBdcPLZdLPQjLQZ", "vJMBpBzzzfNCCzCffJlzgMWDWwPDtVtmVHPMwVHD", "bJjWzWFlTMjjSNBrRcBrZR", "mwnwqPwnGQPCqmJmPQJPCVNcRZBRRrrNrmrcVpSrRf", "PGvQQGPqvhWFWlJbDv", "PNPrdmPGRJlZCrCJlGQzjRFLpFRppjgppgcj", "DwfVnssbVnSWShDwsnnhBLFjFgjFBzDBjHDLpHDj", "vSsMgbsTfTwwfMffnTvgNNCmrPJtCNrJrCrrtvGm", "cRnRplCzccVcrwcnppVVzRCNhfhgChNJfPgHJdHDNtNCtP", "WFmbLMZdLBqfJNbPTfttDD", "BdMWdQsGsSsrpzrswr", "llhhZzSLqlzwRrffzwzT", "GvBbNjHbjjTGGHHFcsFvfRrtJQPvtRfwwfrPJD", "HGbcbTTjHFNpppmLnSdplWqZ", "FhwFbPwsvtRgVCgvMT", "HJVHdHBWdBQSSSQnqSQLqZHtcCctppgBtRrgtMCgTprRMM", "QNzZLVSLLLDGPPzPmbFs", "VdTHmWCVZDTPBBWBQBFQQg", "MzjMjzCjJsbJhhPz", "crfGGLwwLGrtrvCtdTmdDH", "wRLvLmGQLwFPBRmnLCLmGQTzNNqVNZMMVzzQbzVbNZpMVb", "jsgJWjdHghsglHtWsjSfHzVNqzfpCCzqDpzDrVVrrD", "jJtWWsWhtSHsSSgchthHcjHCvcFCRvwvvTTFBGvBmmGLnL", "LpjWLNqWpwRWMqLRGjwJlStgbtrVgHFrGllDDrVH", "SQmmTcZZvSZBTmTSzhPTddbVDhHllgFCDHtrDHgDVVDr", "PzTTvznBncnfTmTTQcPdmzzMqWNfqwRLpWJsNfwLJjsSwJ", "lsGdGwBsflGrfsHvHwQLdFrmPhDhCFhhjWCVmhDzmbmPhC", "qtMSNNZZMpcnVzmVbCqjWjzB", "ZZcgRJpBtTMNnntncwgQQdfGHHHlsQffLH", "jBBtjjqfnwStBSrVVFwSVVvvWzHmcWvWbvPmPbWrbMRM", "GTdNDlpJhlCvPbHgcDmgDH", "JZQdQhNldLdTpGdJGdNCpLZdSBnnBFfHHswqqjffZsqsFjns", "phJhDPQLDSJvpHhvDJhfrFQVRrnsslrgwrVrrRjg", "mWNWqZWWZBMdCGMNCdWmWCNCsnVFTRsVnZFlsrlFwFgVsgjr", "dWdjttGmNCBchJfhHvhPtvJt", "CSFSFdfCzJhtSCHQFjQHQWFHRNHG", "wnbrgZnwZgDLsLbwsLrsrNWQNjPZHHvPPQHNqHHvqB", "LbmTLDsgggQmzmCCppdtSJtM", "SzSSchCdZgHbwHSZ", "GsMMmslnsfmNGNNNVVtZWdwbqQbpgWjjgWZjQm", "DvlMtflGGVGthhzdvLvhrTcc", "dvfVNqHlQfGRcjDczlCDnC", "PsPsStLprtTTFSTLmhSVSFSsCzRRjzDnMJDCMWWDjMnMnpjW", "hBFPhSBFttBhStLwmsPTtPsFHZNGfQgdgdZbdqZwdgNVvwvH", "rhjcChdgjdCrjLjLLSLmLFMmFtNnnbQNNNPMbbmtQF", "lwWRZDlsWzrbbQpN", "rTRqsqDRRRsDRVrqDgBCdCVShjCBHchjdh", "PsspltlPsmTsmbmfTPSTTCGjhJJjCnpqJJNhhJwNJh", "BdrLVvgQLQVLHRZGnqRhRNdwNC", "WrFVHDgDQFHVLVVDFQMLltmPsssPztwsPTzsWcmc", "CBvvSzFGSGGWfFZpcHqjvjcvcqccJq", "bRQwgbbhrRhdwmQbWtdjnJHqVJccJqgHVJHJcl", "RRmbPrNRRPLLtmbQmbNwddCTSTzBSDBDSMFTBSSPZFFW", "cppsSgNrSgwrGRdHRrwd", "LzqqmCLCLWQvCzmzZwHnZZHSwvwnlDlS", "hzFqFLLLFtSNVsFF", "zpZcZZZdppzDLWDtJGgfGbTGGJTGcc", "qhvNSClCShRrRBBWTQfgBFbgtfgg", "HlHqvjqmCvCvlSSHvVdsVDzjpVjMWdwLpP", "qLdsfNsTHQwnSNSBNS", "gFhWzrhfbmlpmZhJWrFSvRMnwwvvpBpBSpQBMv", "rgWZrbmlmbzFfglgWzGggFJLccVPqLPqtPLGcPsPHcPLTd", "jTTWRCCbwJJNTHrffqNnzh", "DZVmDpgGBVdcMZnqfhlNHQMlNNhl", "sDcpsDZBcmgdssZcnmSWCPWRSRwJWwvFLvRwWj", "hWwhgQlQQgjPhFChZVdbcJ", "zHsrMPNMtDDTmbcJbccmDb", "znzPzrtHtHtMzqHHrsSSLwljqfgwGggjlQjQQgQBGj", "JpnRtqlJsqDJJBBNNmQmgdmRNGGmvv", "hTCbTwMCwVhTWdmDgDvjWD", "MDhhMSwZCbbLVhbLcDSwCwZtZznlzlnqBPBpHPPlBlHJ", "CtvnvqNNDchrhFVpwftmgQgpQfwS", "MbdqPWGjBjMBbwlfVgdmfSfJJS", "jWzbzjWWjWMMbRbMsjzBhChrNHcNqHcrNnhssnsc", "LlLJSWgWllSShRmRlBLJSVBzpTHzTTJcpTHzpTTcPpGpTr", "MfMqnvbvDfbFFZDfFNjsGrRppHpZGGcGrcPprz", "wfNFvtwMvbnntftjfNtVmlgmStBmlBWdQQRg", "GpFRRPGWqzHwdqpzqbjjgfZptBBVMSjSfBZc", "TClllrnsJvDMBgcjfmtssB", "NlhNNchrNJlLvClNDrzbGRqwqqqwqPPFLGdd", "qFmVtvmmVvzzFtzzGzzMNNMSSTjNJlStjSfNgf", "sWrPBCnCTMsTJfSM", "QTLbpnRpRppnRQdRzRZqGzFFVVRz", "WGGPjFvMVNjlcQJr", "bslfldbgtpSmwmSNHQhLJhcwLcQrQV", "gTltCsSsssPFnDzWPTMz", "hhRRhQgGrHjhRsrgqznbzncZjVVJVjncjd", "DSFfNTBFSDmMSTDlFbBBdccCdJJZCbZCbW", "DDLmdSmTvQQgsgvGHH", "dNqNgNvFnvdZHFWnZWNBTQlPTppPGlCTpBQppq", "LJrtLrsLjsGvTCTpQP", "mtLhjVjMhhmVMvtJmLfhFWHnngbRRdZHngnZWZ", "NzdVNzqqCtCHMMZBCGBW", "psjllRjFpjpbjspFmWmWnLBmMMQMmHbm", "DhsTPDRTDHpsvRjdNtzJJJdhqwcdqc", "VbhRbZgRHMFhQpHd", "fvlqPzmzJJqJSPsWmPTNddNFHbNFGHNTHSbc", "CqzlfqrCnbrBZjBr", "SNSrDZFHnTqFsFddsCmsMC", "ctVthlGjfhGljcCJmcqMCqcqBB", "VtjvtjhhPPtWqVPLjvqjLVNRppRTvNSnbnZRZTHRnpTD", "fzsBSsNBMNMszNGGJvgjjPggzjdFPgpJ", "bmrVVVrmRrrvRmwvqlbHTDgwdLFjQPJPFddwJPFggj", "HHHrZqhqbTMcZBCZfvcN", "tzsJsnsmBzlVqjssZZrg", "MQZHfNCffpMfpGSpPvpfCGCTTVwFTlwrggjSgqFjVjTwwg", "NfMGGGPZpvLDvLCGGfQHMpZRDRWchRRtBBzmJnmzmnBznb", "BSRBjtNjZrsjRjjNsVBjbrMwCgGCCwCdHrlcdccGcH", "DJTTJLpFnFLdJJqPLTWqLTpwHzCGccCzvvcHwMvWzggCMC", "PmpTTdndmmLqfLTTLDqJVBssbbStVmjjSsZNsBZm", "ddCnZvCDSgghFhbbmFVQ", "JzlMcJTMMPPfJJfsMsjWlHVhLbQVlFWmHbbb", "BPwwsPfsqszfFqppwTsqzpntDSnCBnDRZrSZdnDdtvZD", "SllzzPplWldwLGlzbtPZZjVScnnNSjnNsqNqsc", "BrCfFDJFDHBhJCChQFhCCBDcTnNVpZZcNcvQTcjvvcTcZV", "RCmFHJDJhCmBmRCgDCFRpmGbWWbLPlbMWzzGttzgLMbt", "vGTfsZnfvfzTjsnfzTJlwqQjwmCqqMFjFFQMlq", "LHtHRVLRLNtWcmVbRrPbRcwgQwgwMwClwClwrgFpwqpw", "VDPtbVLBmLbLbDDNnnnzJJfJfBfvSGBn", "lpPCRVVQppzHlZgzglgF", "rtfttLdLdscmGtzngPHHFHFH", "LPLLhfhbTDLmPdcrcWdTcDSjjRqwwbqpRwNBNpBwjQwR", "dWQfCJrwvQCfFqNwRbbzVbVVLGTR", "ZpZshPMzBjGjtVMN", "phpSlSlDlcZpcZPrdHCFzFzFWFDWQH", "tfMMZhjLlChsdsds", "PHQRMHRwpRPBMvWvPRBpPdWDslGrbscTlTGcCsGddG", "FqPSvHPHPBzQRBBwwRJfVtgjzntMntjJLMtJ", "VBwJvwVwNbVRdPwMgWggGMgH", "jDhqflDDhrqshNhdgPGHphLg", "FltsrtcFrclrNqDfqmzQJQQRBzBCvCFvBR", "RZsSSJDJZLDWnGDMLD", "ClbnlfmpNtmgbtmMqWdjNGjLQjLqLj", "gcblTlVCnVmcPrvRPFRrZs", "mbJcScmbDWLmSBzwjPRTfjmmRhpl", "tFFFtGttdClHVMCHFMMwTpwNjGpzPpNRRzzpPN", "gCCdvZCVHsFvJnnDSglSglDn", "dSndnRRvVSpLSphfqvTgWqrzqvvw", "PBFQbQbDhGfjTTFzqG", "tPmCJMtDDNcMVdhhVc", "QVRVHCQRmdTRqrZFCWrLZNZFbb", "ncncsPnhslBRSSSbFhtbZDLMbLbtLb", "lvflPcfPSsPzlJlPlcPBfHJQwRwHmqdVpRGGGdQmww", "GTCGMCcGdgRnnbbbMLwmMz", "DQFZzllWDDLwDJLnJpnp", "qBVrNNlZfFNlWlWqfRzhgvhCqHRdCGGSvc", "ZnMnGbLZfJcBcLTgWF", "dHJjdzqssHHNJwCHpHtDccvtBTtvccWWrrTWSg", "CmlqCNzCzHlmdsqzNzRhMhZRbZMPmRfRJQPb", "LsLLrFLcFjrtmZhhmhHGhJGGhH", "ffvbsbWpSBSSCCQbsSBSwwJHHvhZHHGdGVGlMlTVdZlT", "pSzWNPSfCwWNPBfsFqtFLtsqRzqFgj", "hwwpvjVppGpwWGLrcPjrbrrdbjdL", "FBqFFMFHHsHssNHtslqtFmldnnLrPhMnccrnMzZnbLgPLz", "mJBSstlJQpwGSVhC", "cgJDVWsrWggpcHhMzwwPnQMWMm", "SZGBjdBqBBjGjjqNGfGNNHPnRSQFzhnwmnQzQnPHMR", "bjjCZddjZbZBCtLhCZhftrgJglcTlJgvTllJvDVDLg", "QpRJpCFdpqTQcqSTBBGBZVjZjVjFvwVB", "nnnWfnHhPDlDnlLwGjBBbVVZGbCGbP", "LhhLMLMrMWMrCprTqpJQpz", "dqGGZJdZbTTMFFTGJFFbMdnCHSdWcmNmcCdWSggfSW", "QsjjtrzLrQwDPjrQLrCfSSnmCmHWlCgmzlNl", "PQpQPjQPsBstLBPttDrjBwTZMFMZFvJFJhMhnMJqpTJJ", "JMLrSvHJdJvvJfrHMJRfWzWDFPwCcWqRRRcq", "ljZsZTmmtTBlpTlTjQZCtNFPVqDRwWwWWVPcDRVpFRDz", "mBgQgNNTNvrvJSvgCb", "DWbWtzWDfDffbsMbZMffDDLncnnCJmLVsJJJnhgcngLs", "TjgNGSBRTRTQrFRjFGBVLwLnnNncCLLCCcmhPC", "GgGjvgddvvWqqfdZftWH", "zMmsQlMfQQMhjsmjfsmHlhncRRZnRRRJRvZWWnhccdRC", "BptFtDSSrTrpgtgqqgtZtvVVdVvccVnJdVnG", "qpgPqBLDNTgqBrSLpDBMJfjzmbJMHjLMfjslzH", "DPgLgPhfNDRqhDFDsBTtrrrdbbztCbtf", "MjGSScGVGSlJjbbrtTvdzsTq", "JJwJGWMZwMlWnFFgqNQFpF", "WRGDHmGqWHlrmtVVVRVqpNZvZvvvTNPMPjbPdM", "BwhBwsnzwhzSfCfswFvpvTzTdpMpjvPMZNTb", "LFFQgnbfChSFBhFnftRRLrttDmmRJHtlGH", "MhqhRHmDdRlRlGnfZbJVsNNZDnNb", "QwvzgtwvFpmjwzLjFLJZrsZbPfPZbsVpfPsb", "gvjTzBLztLTjwFjtgLTgtzwdWRqdqRTMSWcWTmWlqdhHHm", "ZfzzfmhdpNLNBDDsFfQVCDggfV", "HPFjljSnHrqVDgtgQgQMqC", "rGnSJHvjSwGzwFhGZG", "HqmHRDprrNTZTMbh", "CJvzQRQVQCgNzZbzgMNd", "vPCvFPcfQFlSJBcfRcPHmDGqWGDqpGtjjtGGHl", "wcfpJVHfJBffBBGWRprNRWWWNdhv", "DzMzMPqjDnjgCMZPZjzjCjChGdvvbhNdSvrhNWSNqWRRdS", "jjCTtnMTDsMBtLRQwwQlFV", "JqGnVqCTpDVCTnNLgmPzdgjcGmRg", "HrSBJSHblsJthsBBSBhMsrzmdNRccjLzgcLmjgPPjlLL", "HSwSttbswWJrbrSWppvVqvvnQVppQQ", "JDCHssRTTwcRJDcnCDzRHsHNPZGBtPzFPSPttZSZGBqPBZ", "vWhLmTlfrhFqGWSNQNqF", "vpMhhpfvmTfhvbLhhgvmgvvlCCJCCMnDnDCnsjRMVDMDswCC", "ZgjdlmlmmlJgHJlbZrSDrnrMrmLLDFprmp", "TvqdTtdctvvDrGGSDn", "CWPBhtWqPPwcdVwlNJfVVNNbbb", "vgmrrwlPPrwPBPtmvFcMMrsMSJHscJcMSHDH", "TWdLnZjCLGLMQLHBLS", "jqVTTZqjdTVjNFNPqBvgvBNl", "jmcgMzsmjmfvJwFpFfRWZRWp", "drdSldTmCmTDCNCtbRRWqRwtttFZpZWZqw", "NLCVLNLTbbTrQNQDvnzschgghnmnHQcH", "sRVhVQDVDQRRMQhsqtRRNzqzbNzRqNGp", "WdjCLHLjdFnCCnjnFnLHHmPmNJbztJJpprBpbGzbpJbqGWtB", "CCFFCnFjdnjCTHmCLTLLCnFnQVhQQVDMhQQVgZZNVVDDsTVh", "cGLzZgfzcNNzzRZvjvRmVDmmqCCDSdVVChVnDf", "QstsPlWHQlWhMMtpsbtpQtlpDqBVqPSCSVnTTqmVdDVDVdBV", "stptQFJrHptlQsFJMHtHhFbvNwvjLGvvNgzgjcwczzJcNJ", "SQHCrCFPJZcnWrqn", "vfJvJjfGGDggqZGcWD", "pjLpRwzhRFtHdMQJ", "HNSHNDvnvdffDNfqdZfdStcFFMGmmrRBcmFcrMrqrWFB", "VblwzwhwPLlCGGzgzhmFjbjFrMFrjFBmbcrM", "hlVPTCCQCCzVlPzhGgPVJCpHtdtSpQSZNNfnZdSSdnSD", "cBVmfwqwmWggTRmQzTQl", "CDnnHjSDPLCSCLHLHCHNCDFgwJljFQRRhlglbzJFQQhl", "GptHLtNGHtCHSnCMtGWdcsqqWwMcqvdsVwfd", "HsMFNRNWnbWfZLzWzQ", "PqrpjqNdjjhPcdbpvmfzfbffbzmv", "GjhhcPjPccVrqcPCldCjssHNnTnNttRwwVMTHMnV", "jjCcBswcfnwgpPFPwFFGSFSwFb", "VvmVhVvRRQqttRtQDLzLhqRlrBFMWrGPBSMSZSMFqBWZZP", "mvQmLRvJtBJVnTcJCjsjsdgp", "qgqvPbdMDMMPwpbLFGwtNlNF", "TTQmdJTnSllFGtJNtw", "CSSHmQHfmVcHjQmSvPBdBDDWMVhMhRMB", "WCvQNZdhCDnnPfQPfTzjHcppsHjpsSjHNS", "mFMgMBlMmBqHjjBfTjHzBc", "grJbrqfqMVFJrlJrtCtvhPPQdnvnnvnwdW", "FdQQJRdfSSfrJsRZfFsRSvtDBmDHGtGqbgvnmbDnvDGq", "lcMzjCPTVtMqgWWGqn", "VpLjcVPczhzznPLcPhTwFQFRZNfFNrNZFpZNsZJR", "VWgJhmdDdJDdVPggPSTSTWvvfRzfFfFbNb", "jCQtnpGQrHMctnpzRbFfgSwHvgwfwv", "ntcMcqLMcQccQLgjBPLdhZDVlJPVdDLJ", "RnPnwtqHnJthjLMcWWncMn", "msdCrCdNpBBsCrlNTpNBDNGzcLchQjFQzccQLQpzLzWtFS", "sTbdTBNrTCTTBCNBlVbwgVPJHtPgPvqgff", "QmBsmpmcZQNqPqVnPFVpGh", "gDDMDLMJgHfJwJMzfTfdGLhChPtvnGRPRRLFGPGv", "DTlzgwfDrrrMWlncbscNnlSW", "tBwvGHFttrFrvRgRhCmCmwQmMg", "JWbNJZjzfbVjWjBhqfmSnhqCqgnQ", "ZZJJJbclzJcsTPdvTTPTBFtHDF", "LszmFTFpTmszLrpqSmFpzcvQjtQjvLJgJtcBjgtJjj", "VHNwwNCVCChddfwHlWdnlnGRQPcQjRvMWBJJtMMWcvPJMM", "nGHNVHhnfnHDNhCfdhNNlwHvmpDrZDmpzmbZSZFsmmbqrrsz"];

const sampleInput = ["vJrwpWtwJgWrhcsFMMfFFhFp", "jqHRNqRjqzjGDLGLrsFMfFZSrLrFZsSL", "PmmdzqPrVvPwwTWBwg"];

const tmpInput = ['a','b','c','d','e','f'];


function getFirstHalf(array) {
    let half = array.length / 2;
    let firstHalf = [];
    for (let i = 0; i < half; i++) {
        firstHalf.push(array[i]);
    }
    return firstHalf;
}

function getSecondHalf(array) {
    let half = array.length / 2;
    let secondHalf = [];
    for (let i = half; i < (array.length); i++) {
        secondHalf.push(array[i]);
    }
    return secondHalf;
}

function checkCommonItems(firstHalf,secondHalf) {
    const commonItems = [];
    for (let i = 0; i < firstHalf.length; i++) {
        for (let j = 0; j < secondHalf.length; j++) {
            if(firstHalf[i] === secondHalf[j]) {
                //check item does not already exist in commonItems array
                let bool = commonItems.includes(firstHalf[i]);
                if (!bool) {
                    commonItems.push(firstHalf[i]);
                }
            }
        }
    }
    return commonItems;
}

function getArrayOfCommonItems(array) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        const first = getFirstHalf(array[i]);
        const second = getSecondHalf(array[i]);
        const commonItems = checkCommonItems(first,second);
        newArray.push(commonItems[0]);
    }
    return newArray;
}

function sumPriorityValue (array) {
    const alphabet = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    for (let i = 0; i < array.length; i++) {
        let counter = 0;
        for (let j = 0; j < alphabet.length; j++) {
            counter++;
            if(array[i] === alphabet[j]) {
                array[i] = counter;
            }
        }
    }
    //sum total values of array
    let totalValue = 0;
    for (item of array) {
        totalValue = totalValue + item;
    }
    return totalValue;
} 


let answer = sumPriorityValue(getArrayOfCommonItems(puzzleInput));

//PART TWO

function createNestedArray(array) {
    const nestedArray = [];
    let tmpArray = [];
    let counter = 0;
    for (let i = 0; i < array.length; i++) {
        counter++;
        //when remainder is 1 or 2
        if((counter % 3) !== 0) {
            tmpArray.push(array[i]);
        }
        //when remainder is 0
        else if((counter % 3) === 0) {
            tmpArray.push(array[i]);
            nestedArray.push(tmpArray);
            tmpArray = [];
        }
    }
    return nestedArray;
}

function findCommon(array) {

    const commonItemsFirst = checkCommonItems(array[0],array[1]);
    const commonItemsSecond = checkCommonItems(array[0],array[2]);
    const commonItemsThird = checkCommonItems(array[1],array[2]);
    
    const commonArray = [commonItemsFirst, commonItemsSecond, commonItemsThird];

    return commonArray;
}


//PART TWO ANSWER

const nestedAnsArray = createNestedArray(puzzleInput);

function getArrayOfCommonItemsPartTwo(nestedArray) {
    const newArray = [];
    for (let i = 0; i < nestedArray.length; i++) {
        const threeArrays = findCommon(nestedArray[i]);
        const commonItem = findCommon(threeArrays);
        newArray.push(commonItem[0][0]);
    }
    return newArray;
} 

const partTwoArray = getArrayOfCommonItemsPartTwo(nestedAnsArray);
const finalAnswer = sumPriorityValue(partTwoArray);

