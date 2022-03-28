/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  ethers,
  EventFilter,
  Signer,
  BigNumber,
  BigNumberish,
  PopulatedTransaction,
  BaseContract,
  ContractTransaction,
  Overrides,
  CallOverrides,
} from "ethers";
import { BytesLike } from "@ethersproject/bytes";
import { Listener, Provider } from "@ethersproject/providers";
import { FunctionFragment, EventFragment, Result } from "@ethersproject/abi";
import type { TypedEventFilter, TypedEvent, TypedListener } from "./common";

interface AdminInterface extends ethers.utils.Interface {
  functions: {
    "addBaseLiquidity(address,uint256,uint256,uint256[2])": FunctionFragment;
    "addLimitLiquidity(address,uint256,uint256,uint256[2])": FunctionFragment;
    "admin()": FunctionFragment;
    "advisor()": FunctionFragment;
    "pullLiquidity(address,uint256,uint256[4])": FunctionFragment;
    "rebalance(address,int24,int24,int24,int24,address,uint256[4],uint256[4])": FunctionFragment;
    "removeWhitelisted(address)": FunctionFragment;
    "rescueERC20(address,address)": FunctionFragment;
    "setWhitelist(address,address)": FunctionFragment;
    "transferAdmin(address)": FunctionFragment;
    "transferAdvisor(address)": FunctionFragment;
    "transferHypervisorOwner(address,address)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "addBaseLiquidity",
    values: [string, BigNumberish, BigNumberish, [BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(
    functionFragment: "addLimitLiquidity",
    values: [string, BigNumberish, BigNumberish, [BigNumberish, BigNumberish]]
  ): string;
  encodeFunctionData(functionFragment: "admin", values?: undefined): string;
  encodeFunctionData(functionFragment: "advisor", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "pullLiquidity",
    values: [
      string,
      BigNumberish,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "rebalance",
    values: [
      string,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      BigNumberish,
      string,
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      [BigNumberish, BigNumberish, BigNumberish, BigNumberish]
    ]
  ): string;
  encodeFunctionData(
    functionFragment: "removeWhitelisted",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "rescueERC20",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "setWhitelist",
    values: [string, string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferAdmin",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferAdvisor",
    values: [string]
  ): string;
  encodeFunctionData(
    functionFragment: "transferHypervisorOwner",
    values: [string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "addBaseLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "addLimitLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "admin", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "advisor", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "pullLiquidity",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "rebalance", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "removeWhitelisted",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "rescueERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setWhitelist",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferAdmin",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferAdvisor",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "transferHypervisorOwner",
    data: BytesLike
  ): Result;

  events: {};
}

export class Admin extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  listeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter?: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): Array<TypedListener<EventArgsArray, EventArgsObject>>;
  off<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  on<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  once<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeListener<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>,
    listener: TypedListener<EventArgsArray, EventArgsObject>
  ): this;
  removeAllListeners<EventArgsArray extends Array<any>, EventArgsObject>(
    eventFilter: TypedEventFilter<EventArgsArray, EventArgsObject>
  ): this;

  listeners(eventName?: string): Array<Listener>;
  off(eventName: string, listener: Listener): this;
  on(eventName: string, listener: Listener): this;
  once(eventName: string, listener: Listener): this;
  removeListener(eventName: string, listener: Listener): this;
  removeAllListeners(eventName?: string): this;

  queryFilter<EventArgsArray extends Array<any>, EventArgsObject>(
    event: TypedEventFilter<EventArgsArray, EventArgsObject>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEvent<EventArgsArray & EventArgsObject>>>;

  interface: AdminInterface;

  functions: {
    addBaseLiquidity(
      _hypervisor: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      inMin: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    addLimitLiquidity(
      _hypervisor: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      inMin: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    admin(overrides?: CallOverrides): Promise<[string]>;

    advisor(overrides?: CallOverrides): Promise<[string]>;

    pullLiquidity(
      _hypervisor: string,
      shares: BigNumberish,
      minAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rebalance(
      _hypervisor: string,
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      _feeRecipient: string,
      inMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      outMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeWhitelisted(
      _hypervisor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    rescueERC20(
      token: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    setWhitelist(
      _hypervisor: string,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferAdvisor(
      newAdvisor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    transferHypervisorOwner(
      _hypervisor: string,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  addBaseLiquidity(
    _hypervisor: string,
    amount0: BigNumberish,
    amount1: BigNumberish,
    inMin: [BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  addLimitLiquidity(
    _hypervisor: string,
    amount0: BigNumberish,
    amount1: BigNumberish,
    inMin: [BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  admin(overrides?: CallOverrides): Promise<string>;

  advisor(overrides?: CallOverrides): Promise<string>;

  pullLiquidity(
    _hypervisor: string,
    shares: BigNumberish,
    minAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rebalance(
    _hypervisor: string,
    _baseLower: BigNumberish,
    _baseUpper: BigNumberish,
    _limitLower: BigNumberish,
    _limitUpper: BigNumberish,
    _feeRecipient: string,
    inMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    outMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeWhitelisted(
    _hypervisor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  rescueERC20(
    token: string,
    recipient: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  setWhitelist(
    _hypervisor: string,
    _address: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferAdmin(
    newAdmin: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferAdvisor(
    newAdvisor: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  transferHypervisorOwner(
    _hypervisor: string,
    newOwner: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    addBaseLiquidity(
      _hypervisor: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      inMin: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    addLimitLiquidity(
      _hypervisor: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      inMin: [BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    admin(overrides?: CallOverrides): Promise<string>;

    advisor(overrides?: CallOverrides): Promise<string>;

    pullLiquidity(
      _hypervisor: string,
      shares: BigNumberish,
      minAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, BigNumber, BigNumber, BigNumber] & {
        base0: BigNumber;
        base1: BigNumber;
        limit0: BigNumber;
        limit1: BigNumber;
      }
    >;

    rebalance(
      _hypervisor: string,
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      _feeRecipient: string,
      inMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      outMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: CallOverrides
    ): Promise<void>;

    removeWhitelisted(
      _hypervisor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    rescueERC20(
      token: string,
      recipient: string,
      overrides?: CallOverrides
    ): Promise<void>;

    setWhitelist(
      _hypervisor: string,
      _address: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferAdmin(newAdmin: string, overrides?: CallOverrides): Promise<void>;

    transferAdvisor(
      newAdvisor: string,
      overrides?: CallOverrides
    ): Promise<void>;

    transferHypervisorOwner(
      _hypervisor: string,
      newOwner: string,
      overrides?: CallOverrides
    ): Promise<void>;
  };

  filters: {};

  estimateGas: {
    addBaseLiquidity(
      _hypervisor: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      inMin: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    addLimitLiquidity(
      _hypervisor: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      inMin: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    admin(overrides?: CallOverrides): Promise<BigNumber>;

    advisor(overrides?: CallOverrides): Promise<BigNumber>;

    pullLiquidity(
      _hypervisor: string,
      shares: BigNumberish,
      minAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rebalance(
      _hypervisor: string,
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      _feeRecipient: string,
      inMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      outMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeWhitelisted(
      _hypervisor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    rescueERC20(
      token: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    setWhitelist(
      _hypervisor: string,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferAdvisor(
      newAdvisor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    transferHypervisorOwner(
      _hypervisor: string,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    addBaseLiquidity(
      _hypervisor: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      inMin: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    addLimitLiquidity(
      _hypervisor: string,
      amount0: BigNumberish,
      amount1: BigNumberish,
      inMin: [BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    admin(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    advisor(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    pullLiquidity(
      _hypervisor: string,
      shares: BigNumberish,
      minAmounts: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rebalance(
      _hypervisor: string,
      _baseLower: BigNumberish,
      _baseUpper: BigNumberish,
      _limitLower: BigNumberish,
      _limitUpper: BigNumberish,
      _feeRecipient: string,
      inMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      outMin: [BigNumberish, BigNumberish, BigNumberish, BigNumberish],
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeWhitelisted(
      _hypervisor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    rescueERC20(
      token: string,
      recipient: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    setWhitelist(
      _hypervisor: string,
      _address: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferAdmin(
      newAdmin: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferAdvisor(
      newAdvisor: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    transferHypervisorOwner(
      _hypervisor: string,
      newOwner: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
