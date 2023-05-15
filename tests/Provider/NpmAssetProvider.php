<?php

declare(strict_types=1);

namespace Yii\Assets\Tests\Provider;

use Yii\Assets;

final class NpmAssetProvider
{
    /**
     * @return array array of asset bundles.
     */
    public static function assetBundles(): array
    {
        return [
            ['Css', Assets\SweetAlert2Dev::class],
            ['Css', Assets\SweetAlert2Prod::class],
            ['Js', Assets\SweetAlert2Dev::class],
            ['Js', Assets\SweetAlert2Prod::class],
        ];
    }
}
